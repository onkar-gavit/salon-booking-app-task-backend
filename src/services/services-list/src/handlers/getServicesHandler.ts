import { APIGatewayProxyResult } from "aws-lambda";
import { ServiceService } from "../service/serviceService";
import { formatResponse } from "../utils/responseFormat";
import { handleError } from "../utils/errors";
import { AuthenticatedServiceEvent } from "../models/service.models";
import { authMiddleware } from "../../../../../libs/middleware/authMiddleware";
import middy from "@middy/core";

const serviceService = new ServiceService();

const baseHandler = async (
  event: AuthenticatedServiceEvent
): Promise<APIGatewayProxyResult> => {
  try {
    // uid already injected by authMiddleware
    const { uid } = event.user;

    // Get services for the business
    const services = await serviceService.getServices(uid);

    return formatResponse(200, {
      message: "Services retrieved successfully",
      data: services,
    });
  } catch (error) {
    const { statusCode, message, details } = handleError(error);
    return formatResponse(statusCode, { message, details });
  }
};

// Wrap with Middy + middlewares
export const handler = middy(baseHandler)
  .use(authMiddleware());
