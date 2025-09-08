/**
 * Custom error classes for better error handling
 */

export class ValidationError extends Error {
  public statusCode = 400;
  public errors: Array<{ field: string; message: string }>;

  constructor(errors: Array<{ field: string; message: string }>) {
    super('Validation failed');
    this.name = 'ValidationError';
    this.errors = errors;
  }
}

export class NotFoundError extends Error {
  public statusCode = 404;

  constructor(resource: string = 'Resource') {
    super(`${resource} not found`);
    this.name = 'NotFoundError';
  }
}

export class ConflictError extends Error {
  public statusCode = 409;

  constructor(message: string) {
    super(message);
    this.name = 'ConflictError';
  }
}

export class UnauthorizedError extends Error {
  public statusCode = 401;

  constructor(message: string = 'Unauthorized') {
    super(message);
    this.name = 'UnauthorizedError';
  }
}

export class ForbiddenError extends Error {
  public statusCode = 403;

  constructor(message: string = 'Forbidden') {
    super(message);
    this.name = 'ForbiddenError';
  }
}

export class DatabaseError extends Error {
  public statusCode = 500;

  constructor(message: string = 'Database operation failed') {
    super(message);
    this.name = 'DatabaseError';
  }
}

/**
 * Error handler utility
 */
export const handleError = (error: unknown): { statusCode: number; message: string; details?: any } => {
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