export declare class WalkinServiceError extends Error {
    statusCode: number;
    code: string;
    constructor(message: string, statusCode?: number, code?: string);
}
export declare class ValidationError extends WalkinServiceError {
    constructor(message: string);
}
export declare class NotFoundError extends WalkinServiceError {
    constructor(resource: string);
}
export declare class ConflictError extends WalkinServiceError {
    constructor(message: string);
}
//# sourceMappingURL=errors.d.ts.map