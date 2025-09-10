export class BookingError extends Error {
  public statusCode: number;
  public details?: any;

  constructor(message: string, statusCode: number = 500, details?: any) {
    super(message);
    this.name = 'BookingError';
    this.statusCode = statusCode;
    this.details = details;
  }
}

export class ServiceNotFoundError extends BookingError {
  constructor(serviceId: string) {
    super(`Service with ID ${serviceId} not found`, 404);
    this.name = 'ServiceNotFoundError';
  }
}

export class CustomerNotFoundError extends BookingError {
  constructor(customerId: string) {
    super(`Customer with ID ${customerId} not found`, 404);
    this.name = 'CustomerNotFoundError';
  }
}

export class BookingConflictError extends BookingError {
  constructor(message: string) {
    super(message, 409);
    this.name = 'BookingConflictError';
  }
}

export class ValidationError extends BookingError {
  constructor(message: string, details?: any) {
    super(message, 400, details);
    this.name = 'ValidationError';
  }
}

export function handleError(error: any): { statusCode: number; message: string; details?: any } {
  console.error('Error occurred:', error);

  if (error instanceof BookingError) {
    return {
      statusCode: error.statusCode,
      message: error.message,
      details: error.details,
    };
  }

  if (error.name === 'ValidationError') {
    return {
      statusCode: 400,
      message: 'Validation failed',
      details: error.message,
    };
  }

  // Default error response
  return {
    statusCode: 500,
    message: 'Internal server error',
    details: process.env.NODE_ENV === 'development' ? error.message : undefined,
  };
}
