import { APIGatewayProxyEvent } from "aws-lambda";

export interface AuthenticatedBookingEvent extends APIGatewayProxyEvent {
  user: {
    uid: string;
  };
}

export enum BookingStatus {
  REQUESTED = 'REQUESTED',
  CONFIRMED = 'CONFIRMED',
  CANCELLED = 'CANCELLED',
  COMPLETED = 'COMPLETED'
}

export interface BookingRequest {
  serviceId: string;
  customerId: string;
  locationId: string;
  startTime: string; // ISO 8601 datetime string
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
  duration: number; // in minutes
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
