import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";

const handleErrorMiddleware = async (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({ message: error.message });
  }

  console.error(error);

  return res.status(500).json({ message: "Interval server error" });
};

export { handleErrorMiddleware };
