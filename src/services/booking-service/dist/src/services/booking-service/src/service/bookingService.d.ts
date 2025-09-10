import { Booking, BookingRequest } from "../models/booking.models";
export declare class BookingService {
    private prisma;
    private dynamoService;
    constructor();
    createBooking(businessId: string, bookingRequest: BookingRequest): Promise<Booking>;
    private getServiceDetails;
    private validateCustomer;
    private checkForOverlappingBookings;
    disconnect(): Promise<void>;
}
//# sourceMappingURL=bookingService.d.ts.map