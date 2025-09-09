"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatValidationError = exports.formatError = exports.formatResponse = void 0;
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
const formatValidationError = (errors) => {
    return (0, exports.formatError)(400, 'Validation failed', { errors });
};
exports.formatValidationError = formatValidationError;
//# sourceMappingURL=responseFormat.js.map