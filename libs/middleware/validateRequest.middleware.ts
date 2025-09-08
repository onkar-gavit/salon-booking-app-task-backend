// src/middleware/validateRequest.ts
import { MiddlewareObj } from "@middy/core";
import { ZodType, ZodError } from "zod";
import type { APIGatewayProxyEvent } from "aws-lambda";
import { formatResponse } from "../../src/services/auth-service/src/utils/responseFormat";

export const validateRequest = <T>(
  schema: ZodType<T>
): MiddlewareObj<APIGatewayProxyEvent> => {
  return {
    before: async (request) => {
      try {
        const body = request.event.body ? JSON.parse(request.event.body) : {};
        request.event.body = JSON.stringify(schema.parse(body));
        return;
      } catch (err) {
        if (err instanceof ZodError) {
          return formatResponse(400, {
            message: "Validation error",
            errors: err.issues,
          });
        }
        throw err;
      }
    },
  };
};
