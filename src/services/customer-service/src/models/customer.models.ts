import { APIGatewayProxyEvent } from "aws-lambda";

export interface CustomerCreateRequest {
  name: string;
  phone: string;
  email?: string;
}

export interface CustomerResponse {
  id: string;
  businessId: string;
  name: string;
  phone: string;
  email?: string;
  createdAt: string;
  updatedAt: string;
}

export interface AuthenticatedCustomerEvent extends APIGatewayProxyEvent {
  user: {
    uid: string;
    email: string;
    name?: string;
  };
}
