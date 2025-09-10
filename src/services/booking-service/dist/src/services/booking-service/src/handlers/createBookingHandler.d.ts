import { APIGatewayProxyResult } from "aws-lambda";
import { AuthenticatedBookingEvent } from "../models/booking.models";
import middy from "@middy/core";
export declare const handler: middy.MiddyfiedHandler<import("aws-lambda").APIGatewayProxyEvent & (import("aws-lambda").APIGatewayProxyEvent & (import("@middy/http-json-body-parser").RequestEvent & AuthenticatedBookingEvent)), APIGatewayProxyResult, Error, import("aws-lambda").Context, Record<string, unknown>>;
//# sourceMappingURL=createBookingHandler.d.ts.map