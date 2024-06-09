import { NextFunction, Request, Response } from "express";
import { ApiErrors } from "../helpers/api-erros";

export function errorMiddleware(
  error: Error & Partial<ApiErrors>,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const statusCode = error.statusCode ?? 500;
  res.status(statusCode).json({ message: error.message });
}
