import { APIGatewayProxyResult } from "aws-lambda";
import { AuthenticatedServiceEvent } from "../models/service.models";
import middy from "@middy/core";
export declare const handler: middy.MiddyfiedHandler<import("aws-lambda").APIGatewayProxyEvent & AuthenticatedServiceEvent, APIGatewayProxyResult, Error, import("aws-lambda").Context>;
//# sourceMappingURL=getServicesHandler.d.ts.map