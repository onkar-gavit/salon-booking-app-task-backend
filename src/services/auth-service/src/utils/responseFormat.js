"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatValidationError = exports.formatError = exports.formatResponse = void 0;
/**
 * Format successful API response
 */
const formatResponse = (statusCode, body, headers) => {
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
exports.formatResponse = formatResponse;
/**
 * Format error response
 */
const formatError = (statusCode, message, details) => {
    const errorBody = {
        error: true,
        message,
        statusCode,
        timestamp: new Date().toISOString(),
        ...(details && { details }),
    };
    return (0, exports.formatResponse)(statusCode, errorBody);
};
exports.formatError = formatError;
/**
 * Format validation error response
 */
const formatValidationError = (errors) => {
    return (0, exports.formatError)(400, 'Validation failed', { errors });
};
exports.formatValidationError = formatValidationError;
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
//# sourceMappingURL=responseFormat.js.map