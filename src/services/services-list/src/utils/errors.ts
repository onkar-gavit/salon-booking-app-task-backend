export class CustomError extends Error {
  public statusCode: number;
  public details?: any;

  constructor(message: string, statusCode: number, details?: any) {
    super(message);
    this.statusCode = statusCode;
    this.details = details;
    this.name = this.constructor.name;
  }
}

export class ValidationError extends CustomError {
  constructor(message: string, details?: any) {
    super(message, 400, details);
  }
}

export class NotFoundError extends CustomError {
  constructor(message: string, details?: any) {
    super(message, 404, details);
  }
}

export class ConflictError extends CustomError {
  constructor(message: string, details?: any) {
    super(message, 409, details);
  }
}

export class InternalServerError extends CustomError {
  constructor(message: string, details?: any) {
    super(message, 500, details);
  }
}

export const handleError = (error: any) => {
  if (error instanceof CustomError) {
    return {
      statusCode: error.statusCode,
      message: error.message,
      details: error.details,
    };
  }

  // Handle Prisma errors
  if (error.code === 'P2002') {
    return {
      statusCode: 409,
      message: 'Resource already exists',
      details: error.meta,
    };
  }

  if (error.code === 'P2025') {
    return {
      statusCode: 404,
      message: 'Resource not found',
      details: error.meta,
    };
  }

  // Default to internal server error
  return {
    statusCode: 500,
    message: 'Internal server error',
    details: process.env.NODE_ENV === 'development' ? error.message : undefined,
  };
};
