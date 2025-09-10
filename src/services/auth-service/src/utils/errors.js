"use strict";
/**
 * Custom error classes for better error handling
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = exports.DatabaseError = exports.ForbiddenError = exports.UnauthorizedError = exports.ConflictError = exports.NotFoundError = exports.ValidationError = void 0;
class ValidationError extends Error {
    constructor(errors) {
        super('Validation failed');
        this.statusCode = 400;
        this.name = 'ValidationError';
        this.errors = errors;
    }
}
exports.ValidationError = ValidationError;
class NotFoundError extends Error {
    constructor(resource = 'Resource') {
        super(`${resource} not found`);
        this.statusCode = 404;
        this.name = 'NotFoundError';
    }
}
exports.NotFoundError = NotFoundError;
class ConflictError extends Error {
    constructor(message) {
        super(message);
        this.statusCode = 409;
        this.name = 'ConflictError';
    }
}
exports.ConflictError = ConflictError;
class UnauthorizedError extends Error {
    constructor(message = 'Unauthorized') {
        super(message);
        this.statusCode = 401;
        this.name = 'UnauthorizedError';
    }
}
exports.UnauthorizedError = UnauthorizedError;
class ForbiddenError extends Error {
    constructor(message = 'Forbidden') {
        super(message);
        this.statusCode = 403;
        this.name = 'ForbiddenError';
    }
}
exports.ForbiddenError = ForbiddenError;
class DatabaseError extends Error {
    constructor(message = 'Database operation failed') {
        super(message);
        this.statusCode = 500;
        this.name = 'DatabaseError';
    }
}
exports.DatabaseError = DatabaseError;
/**
 * Error handler utility
 */
const handleError = (error) => {
    console.error('Error occurred:', error);
    if (error instanceof ValidationError) {
        return { statusCode: error.statusCode, message: error.message, details: { errors: error.errors } };
    }
    if (error instanceof NotFoundError ||
        error instanceof ConflictError ||
        error instanceof UnauthorizedError ||
        error instanceof ForbiddenError) {
        return { statusCode: error.statusCode, message: error.message };
    }
    if (error instanceof DatabaseError) {
        return { statusCode: 500, message: 'Database operation failed' };
    }
    if (error instanceof Error) {
        return { statusCode: 500, message: 'Internal server error' };
    }
    return { statusCode: 500, message: 'Unknown error occurred' };
};
exports.handleError = handleError;
//# sourceMappingURL=errors.js.map