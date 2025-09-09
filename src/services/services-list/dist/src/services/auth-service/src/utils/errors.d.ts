/**
 * Custom error classes for better error handling
 */
export declare class ValidationError extends Error {
    statusCode: number;
    errors: Array<{
        field: string;
        message: string;
    }>;
    constructor(errors: Array<{
        field: string;
        message: string;
    }>);
}
export declare class NotFoundError extends Error {
    statusCode: number;
    constructor(resource?: string);
}
export declare class ConflictError extends Error {
    statusCode: number;
    constructor(message: string);
}
export declare class UnauthorizedError extends Error {
    statusCode: number;
    constructor(message?: string);
}
export declare class ForbiddenError extends Error {
    statusCode: number;
    constructor(message?: string);
}
export declare class DatabaseError extends Error {
    statusCode: number;
    constructor(message?: string);
}
/**
 * Error handler utility
 */
export declare const handleError: (error: unknown) => {
    statusCode: number;
    message: string;
    details?: any;
};
//# sourceMappingURL=errors.d.ts.map