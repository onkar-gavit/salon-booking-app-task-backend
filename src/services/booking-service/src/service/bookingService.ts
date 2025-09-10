import { PrismaClient } from "../../../../../libs/generated/client";
import { v4 as uuidv4 } from "uuid";
import { DynamoDBService } from "../utils/dynamodb";
import { 
  Booking, 
  BookingRequest, 
  BookingStatus, 
  ServiceDetails 
} from "../models/booking.models";
import { 
  ServiceNotFoundError, 
  CustomerNotFoundError, 
  BookingConflictError,
  ValidationError 
} from "../utils/errors";

export class BookingService {
  private prisma: PrismaClient;
  private dynamoService: DynamoDBService;

  constructor() {
    this.prisma = new PrismaClient();
    this.dynamoService = new DynamoDBService();
  }

  async createBooking(businessId: string, bookingRequest: BookingRequest): Promise<Booking> {
    // 1. Look up service duration in Postgres
    const service = await this.getServiceDetails(businessId, bookingRequest.serviceId);
    
    // 2. Validate customer exists
    await this.validateCustomer(businessId, bookingRequest.customerId);
    
    // 3. Calculate end time based on service duration
    const startTime = new Date(bookingRequest.startTime);
    const endTime = new Date(startTime.getTime() + service.duration * 60000); // duration in minutes
    
    // 4. Check for overlapping bookings
    await this.checkForOverlappingBookings(
      bookingRequest.locationId,
      startTime.toISOString(),
      endTime.toISOString()
    );
    
    // 5. Create booking object
    const booking: Booking = {
      id: uuidv4(),
      businessId,
      serviceId: bookingRequest.serviceId,
      customerId: bookingRequest.customerId,
      locationId: bookingRequest.locationId,
      startTime: startTime.toISOString(),
      endTime: endTime.toISOString(),
      status: BookingStatus.REQUESTED,
      duration: service.duration,
      notes: bookingRequest.notes,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    
    // 6. Save in DynamoDB with state = REQUESTED
    await this.dynamoService.saveBooking(booking);
    
    return booking;
  }

  private async getServiceDetails(businessId: string, serviceId: string): Promise<ServiceDetails> {
    const service = await this.prisma.service.findFirst({
      where: {
        id: serviceId,
        businessId: businessId,
        isActive: true,
      },
    });

    if (!service) {
      throw new ServiceNotFoundError(serviceId);
    }

    return {
      id: service.id,
      name: service.name,
      duration: service.duration,
      price: Number(service.price),
      businessId: service.businessId,
    };
  }

  private async validateCustomer(businessId: string, customerId: string): Promise<void> {
    const customer = await this.prisma.customer.findFirst({
      where: {
        id: customerId,
        businessId: businessId,
      },
    });

    if (!customer) {
      throw new CustomerNotFoundError(customerId);
    }
  }

  private async checkForOverlappingBookings(
    locationId: string,
    startTime: string,
    endTime: string
  ): Promise<void> {
    // Query DynamoDB for existing bookings in the time range
    const existingBookings = await this.dynamoService.getBookingsByLocationAndTimeRange(
      locationId,
      startTime,
      endTime
    );

    // Filter out cancelled bookings
    const activeBookings = existingBookings.filter(
      booking => booking.status !== BookingStatus.CANCELLED
    );

    if (activeBookings.length > 0) {
      const conflictingTimes = activeBookings.map(
        booking => `${booking.startTime} - ${booking.endTime}`
      ).join(', ');
      
      throw new BookingConflictError(
        `Booking conflicts with existing appointments at location ${locationId}. Conflicting times: ${conflictingTimes}`
      );
    }
  }

  async disconnect(): Promise<void> {
    await this.prisma.$disconnect();
  }
}
