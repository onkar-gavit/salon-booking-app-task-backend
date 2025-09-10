export interface ErrorResponse {
    statusCode: number;
    message: string;
    details?: any;
}
export declare const handleError: (error: unknown) => ErrorResponse;
//# sourceMappingURL=errorHandler.d.ts.map