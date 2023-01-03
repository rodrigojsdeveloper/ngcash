import { ApiError } from "./api.error";

class ForbiddenError extends ApiError {
  constructor(message: string) {
    super(message, 403);
  }
}

export { ForbiddenError };
