import { APIGatewayProxyEvent } from "aws-lambda";
export interface ServiceResponse {
    id: string;
    businessId: string;
    name: string;
    description?: string;
    duration: number;
    price: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}
export interface AuthenticatedServiceEvent extends APIGatewayProxyEvent {
    user: {
        uid: string;
    };
}
//# sourceMappingURL=service.models.d.ts.map