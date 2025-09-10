export class WalkinServiceError extends Error {
  public statusCode: number;
  public code: string;

  constructor(message: string, statusCode: number = 500, code: string = 'WALKIN_SERVICE_ERROR') {
    super(message);
    this.name = 'WalkinServiceError';
    this.statusCode = statusCode;
    this.code = code;
  }
}

export class ValidationError extends WalkinServiceError {
  constructor(message: string) {
    super(message, 400, 'VALIDATION_ERROR');
    this.name = 'ValidationError';
  }
}

export class NotFoundError extends WalkinServiceError {
  constructor(resource: string) {
    super(`${resource} not found`, 404, 'NOT_FOUND');
    this.name = 'NotFoundError';
  }
}

export class ConflictError extends WalkinServiceError {
  constructor(message: string) {
    super(message, 409, 'CONFLICT_ERROR');
    this.name = 'ConflictError';
  }
}
