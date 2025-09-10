import { APIGatewayProxyResult, APIGatewayProxyEvent } from "aws-lambda";
import { createWalkinSchema } from "../schema/walkin.schema";
import { WalkinService } from "../service/walkinService";
import { formatResponse } from "../utils/responseFormat";
import { handleError } from "../utils/errorHandler";

const walkinService = new WalkinService();

export const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    // Parse request body
    const requestBody = JSON.parse(event.body || '{}');
    
    // Validate input using Zod schema
    const validatedData = createWalkinSchema.parse(requestBody);

    // For now, use a mock businessId - in production this would come from JWT token
    const businessId: string = event.headers['businessId'] || event.headers['BusinessId'] || 'mock-business-id';

    // Create walk-in
    const result = await walkinService.createWalkin(validatedData, businessId);

    return formatResponse(201, {
      message: "Walk-in requested successfully",
      data: result,
    });
  } catch (error) {
    const { statusCode, message, details } = handleError(error);
    return formatResponse(statusCode, { message, details });
  }
};
