import { APIGatewayProxyEvent } from "aws-lambda";
export declare const authMiddleware: () => {
    before: (request: {
        event: APIGatewayProxyEvent;
    }) => Promise<void>;
};
//# sourceMappingURL=authMiddleware.d.ts.map