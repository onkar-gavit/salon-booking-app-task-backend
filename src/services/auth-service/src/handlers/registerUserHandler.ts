import { APIGatewayProxyResult } from "aws-lambda";
import { registerSchema } from "../schema/registerSchema";
import { registerUser } from "../service/registerUser.service";
import { formatResponse } from "../utils/responseFormat";
import { handleError } from "../utils/errors";
import { AuthenticatedEvent } from "../models/auth.models";
import { authMiddleware } from "../../../../../libs/middleware/authMiddleware";
import { validateRequest } from "../../../../../libs/middleware/validateRequest.middleware";
import middy from "@middy/core";

const baseHandler = async (
  event: AuthenticatedEvent
): Promise<APIGatewayProxyResult> => {
  try {
    // uid already injected by authMiddleware
    const { uid } = event.user;

    // parsed body already validated by validateRequest middleware
    const parsed = JSON.parse(event.body || '{}') as {
      email: string;
      name: string;
    };

    // const parsed = registerSchema.parse(event.body);

    const user = await registerUser({
      ...parsed,
      uid,
    });

    return formatResponse(201, {
      message: "User registered successfully",
      data: user,
    });
  } catch (error) {
    const { statusCode, message, details } = handleError(error);
    return formatResponse(statusCode, { message, details });
  }
};

// Wrap with Middy + middlewares
export const registerHandler = middy(baseHandler)
  .use(authMiddleware())
  .use(validateRequest(registerSchema)); // reusable schema validation
  // .use(idempotencyMiddleware()); // temporarily disabled until DynamoDB permissions are deployed
