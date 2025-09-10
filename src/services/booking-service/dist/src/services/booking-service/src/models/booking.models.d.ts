import { APIGatewayProxyEvent } from "aws-lambda";
export interface AuthenticatedBookingEvent extends APIGatewayProxyEvent {
    user: {
        uid: string;
    };
}
export declare enum BookingStatus {
    REQUESTED = "REQUESTED",
    CONFIRMED = "CONFIRMED",
    CANCELLED = "CANCELLED",
    COMPLETED = "COMPLETED"
}
export interface BookingRequest {
    serviceId: string;
    customerId: string;
    locationId: string;
    startTime: string;
    notes?: string;
}
export interface Booking {
    id: string;
    businessId: string;
    serviceId: string;
    customerId: string;
    locationId: string;
    startTime: string;
    endTime: string;
    status: BookingStatus;
    duration: number;
    notes?: string;
    createdAt: string;
    updatedAt: string;
}
export interface ServiceDetails {
    id: string;
    name: string;
    duration: number;
    price: number;
    businessId: string;
}
//# sourceMappingURL=booking.models.d.ts.map