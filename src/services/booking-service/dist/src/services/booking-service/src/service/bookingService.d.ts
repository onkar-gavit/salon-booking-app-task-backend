import { Booking, BookingRequest } from "../models/booking.models";
export declare class BookingService {
    private prisma;
    private dynamoService;
    constructor();
    createBooking(businessId: string, bookingRequest: BookingRequest): Promise<Booking>;
    private getServiceDetails;
    private validateCustomer;
    private checkForOverlappingBookings;
    confirmBooking(bookingId: string, businessId: string): Promise<Booking>;
    cancelBooking(bookingId: string, businessId: string): Promise<Booking>;
    disconnect(): Promise<void>;
}
//# sourceMappingURL=bookingService.d.ts.map