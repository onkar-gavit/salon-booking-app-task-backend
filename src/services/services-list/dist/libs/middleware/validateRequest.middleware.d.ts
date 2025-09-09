import { MiddlewareObj } from "@middy/core";
import { ZodType } from "zod";
import type { APIGatewayProxyEvent } from "aws-lambda";
export declare const validateRequest: <T>(schema: ZodType<T>) => MiddlewareObj<APIGatewayProxyEvent>;
//# sourceMappingURL=validateRequest.middleware.d.ts.map