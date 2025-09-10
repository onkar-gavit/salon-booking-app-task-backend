export declare class BookingError extends Error {
    statusCode: number;
    details?: any;
    constructor(message: string, statusCode?: number, details?: any);
}
export declare class ServiceNotFoundError extends BookingError {
    constructor(serviceId: string);
}
export declare class CustomerNotFoundError extends BookingError {
    constructor(customerId: string);
}
export declare class BookingConflictError extends BookingError {
    constructor(message: string);
}
export declare class ValidationError extends BookingError {
    constructor(message: string, details?: any);
}
export declare function handleError(error: any): {
    statusCode: number;
    message: string;
    details?: any;
};
//# sourceMappingURL=errors.d.ts.map