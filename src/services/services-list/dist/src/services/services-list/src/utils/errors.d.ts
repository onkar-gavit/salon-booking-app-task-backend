export declare class CustomError extends Error {
    statusCode: number;
    details?: any;
    constructor(message: string, statusCode: number, details?: any);
}
export declare class ValidationError extends CustomError {
    constructor(message: string, details?: any);
}
export declare class NotFoundError extends CustomError {
    constructor(message: string, details?: any);
}
export declare class ConflictError extends CustomError {
    constructor(message: string, details?: any);
}
export declare class InternalServerError extends CustomError {
    constructor(message: string, details?: any);
}
export declare const handleError: (error: any) => {
    statusCode: number;
    message: string;
    details: any;
};
//# sourceMappingURL=errors.d.ts.map