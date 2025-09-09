import { APIGatewayProxyEvent } from "aws-lambda";

export interface ServiceResponse {
  id: string;
  businessId: string;
  name: string;
  description?: string;
  duration: number; // Duration in minutes
  price: string; // Decimal as string for JSON serialization
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface AuthenticatedServiceEvent extends APIGatewayProxyEvent {
  user: {
    uid: string;
  };
}
