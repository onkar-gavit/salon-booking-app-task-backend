import { APIGatewayProxyResult } from 'aws-lambda';

/**
 * Format successful API response
 */
export const formatResponse = (
  statusCode: number, 
  body: any,
  headers?: Record<string, string>
): APIGatewayProxyResult => {
  return {
    statusCode,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type,Authorization',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
      ...headers,
    },
    body: JSON.stringify(body),
  };
};

/**
 * Format error response
 */
export const formatError = (
  statusCode: number,
  message: string,
  details?: any
): APIGatewayProxyResult => {
  const errorBody = {
    error: true,
    message,
    statusCode,
    timestamp: new Date().toISOString(),
    ...(details && { details }),
  };

  return formatResponse(statusCode, errorBody);
};

/**
 * Format validation error response
 */
export const formatValidationError = (
  errors: Array<{ field: string; message: string }>
): APIGatewayProxyResult => {
  return formatError(400, 'Validation failed', { errors });
};

/**
//  * Common status responses
//  */
// export const responses = {
//   success: (data: any) => formatResponse(200, { success: true, data }),
//   created: (data: any) => formatResponse(201, { success: true, data, message: 'Created successfully' }),
//   noContent: () => formatResponse(204, null),
//   badRequest: (message: string) => formatError(400, message),
//   unauthorized: () => formatError(401, 'Unauthorized'),
//   forbidden: () => formatError(403, 'Forbidden'),
//   notFound: (resource = 'Resource') => formatError(404, `${resource} not found`),
//   conflict: (message: string) => formatError(409, message),
//   internalError: () => formatError(500, 'Internal server error'),
// };