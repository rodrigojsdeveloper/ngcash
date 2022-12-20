const ApiError = class ApiError extends Error {
  public statusCode: number;

  constructor(message: string, statusCode: number) {
    super();
    this.message = message;
    this.statusCode = statusCode;
  }
};

const BadRequestError = class BadRequestError extends ApiError {
  constructor(message: string) {
    super(message, 400);
  }
};

const UnauthorizedError = class UnauthorizedError extends ApiError {
  constructor(message: string) {
    super(message, 401);
  }
};

const ForbiddenError = class ForbiddenError extends ApiError {
  constructor(message: string) {
    super(message, 403);
  }
};

const NotFoundError = class NotFoundError extends ApiError {
  constructor(message: string) {
    super(message, 404);
  }
};

export { BadRequestError, UnauthorizedError, ForbiddenError, NotFoundError };
