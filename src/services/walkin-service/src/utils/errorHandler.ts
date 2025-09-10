import { WalkinServiceError, ValidationError, NotFoundError, ConflictError } from './errors';

export interface ErrorResponse {
  statusCode: number;
  message: string;
  details?: any;
}

export const handleError = (error: unknown): ErrorResponse => {
  console.error('Error occurred:', error);

  if (error instanceof ValidationError) {
    return {
      statusCode: error.statusCode,
      message: error.message,
      details: error.code,
    };
  }

  if (error instanceof NotFoundError) {
    return {
      statusCode: error.statusCode,
      message: error.message,
      details: error.code,
    };
  }

  if (error instanceof ConflictError) {
    return {
      statusCode: error.statusCode,
      message: error.message,
      details: error.code,
    };
  }

  if (error instanceof WalkinServiceError) {
    return {
      statusCode: error.statusCode,
      message: error.message,
      details: error.code,
    };
  }

  // Handle Zod validation errors
  if (error && typeof error === 'object' && 'issues' in error) {
    return {
      statusCode: 400,
      message: 'Validation failed',
      details: error,
    };
  }

  // Handle Prisma errors
  if (error && typeof error === 'object' && 'code' in error) {
    const prismaError = error as any;
    if (prismaError.code === 'P2002') {
      return {
        statusCode: 409,
        message: 'Resource already exists',
        details: 'DUPLICATE_ENTRY',
      };
    }
    if (prismaError.code === 'P2025') {
      return {
        statusCode: 404,
        message: 'Resource not found',
        details: 'NOT_FOUND',
      };
    }
  }

  // Generic error
  return {
    statusCode: 500,
    message: 'Internal server error',
    details: 'INTERNAL_ERROR',
  };
};
