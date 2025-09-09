import { APIGatewayProxyResult } from "aws-lambda";
import { loginSchema } from "../schema/loginSchema";
import { loginUser } from "../service/loginUser.service";
import { formatResponse } from "../utils/responseFormat";
import { handleError } from "../utils/errors";
import { validateRequest } from "../../../../../libs/middleware/validateRequest.middleware";
import { idempotencyMiddleware } from "../../../../../libs/middleware/idempotencyMiddleware";
import middy from "@middy/core";
import { APIGatewayProxyEvent } from "aws-lambda";

const baseHandler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    // parsed body already validated by validateRequest middleware
    const parsed = JSON.parse(event.body || '{}') as {
      email: string;
      password: string;
    };

    const result = await loginUser({
      email: parsed.email,
      password: parsed.password,
    });

    return formatResponse(200, {
      message: "Login successful",
      data: result,
    });
  } catch (error) {
    const { statusCode, message, details } = handleError(error);
    return formatResponse(statusCode, { message, details });
  }
};

// Wrap with Middy + middlewares
export const loginHandler = middy(baseHandler)
  .use(validateRequest(loginSchema)) // reusable schema validation
  .use(idempotencyMiddleware()); // idempotency support for POST endpoint
