import { APIGatewayProxyResult } from 'aws-lambda';
/**
 * Format successful API response
 */
export declare const formatResponse: (statusCode: number, body: any, headers?: Record<string, string>) => APIGatewayProxyResult;
/**
 * Format error response
 */
export declare const formatError: (statusCode: number, message: string, details?: any) => APIGatewayProxyResult;
/**
 * Format validation error response
 */
export declare const formatValidationError: (errors: Array<{
    field: string;
    message: string;
}>) => APIGatewayProxyResult;
/**
//  * Common status responses
//  */
//# sourceMappingURL=responseFormat.d.ts.map