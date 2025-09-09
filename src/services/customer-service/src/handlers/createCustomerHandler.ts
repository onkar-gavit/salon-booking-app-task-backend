import { APIGatewayProxyResult } from "aws-lambda";
import { createCustomerSchema } from "../schema/customer.schema";
import { CustomerService } from "../service/customerService";
import { formatResponse } from "../utils/responseFormat";
import { handleError } from "../utils/errors";
import { AuthenticatedCustomerEvent } from "../models/customer.models";
import { authMiddleware } from "../../../../../libs/middleware/authMiddleware";
import { validateRequest } from "../../../../../libs/middleware/validateRequest.middleware";
import { idempotencyMiddleware } from "../../../../../libs/middleware/idempotencyMiddleware";
import middy from "@middy/core";

const customerService = new CustomerService();

const baseHandler = async (
  event: AuthenticatedCustomerEvent
): Promise<APIGatewayProxyResult> => {
  try {
    // uid already injected by authMiddleware
    const { uid } = event.user;

    // parsed body already validated by validateRequest middleware
    const parsed = JSON.parse(event.body || '{}') as {
      name: string;
      phone: string;
      email?: string;
    };

    // Create customer
    const customer = await customerService.createCustomer(uid, parsed);

    return formatResponse(201, {
      message: "Customer created successfully",
      data: customer,
    });
  } catch (error) {
    const { statusCode, message, details } = handleError(error);
    return formatResponse(statusCode, { message, details });
  }
};

// Wrap with Middy + middlewares
export const handler = middy(baseHandler)
  .use(authMiddleware())
  .use(validateRequest(createCustomerSchema))
  .use(idempotencyMiddleware());
