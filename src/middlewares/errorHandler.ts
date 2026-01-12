import { Request, Response, NextFunction } from 'express';
import { AppError } from '../utils/AppError';
import { logger } from '../infra/logger';
import { ZodError } from 'zod';

export function errorHandler(
  err: Error,
  request: Request,
  response: Response,
  _next: NextFunction,
) {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  if (err instanceof ZodError) {
    return response.status(400).json({
      status: 'error',
      message: 'Validation error',
      issues: err.format(),
    });
  }

  logger.error(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
}
