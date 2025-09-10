import { APIGatewayProxyResult } from "aws-lambda";
import { AuthenticatedBookingEvent } from "../models/booking.models";
import middy from "@middy/core";
export declare const handler: middy.MiddyfiedHandler<import("aws-lambda").APIGatewayProxyEvent & AuthenticatedBookingEvent, APIGatewayProxyResult, Error, import("aws-lambda").Context, Record<string, unknown>>;
//# sourceMappingURL=confirmBookingHandler.d.ts.map