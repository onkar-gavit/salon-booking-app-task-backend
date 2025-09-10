import { Booking } from "../models/booking.models";
export declare class DynamoDBService {
    saveBooking(booking: Booking): Promise<void>;
    getBookingsByLocationAndTimeRange(locationId: string, startTime: string, endTime: string): Promise<Booking[]>;
    getBookingById(bookingId: string): Promise<Booking | null>;
}
//# sourceMappingURL=dynamodb.d.ts.map