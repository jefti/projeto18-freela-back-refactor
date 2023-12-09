import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';

export type AppError = Error & {
  type: string;
};

export default function errorHandlingMiddleware(
  error: Error | AppError,
  req: Request,
  res: Response,
  next: NextFunction, // eslint-disable-line @typescript-eslint/no-unused-vars
) {
  if (error.name === 'NotFound') {
    return res.status(httpStatus.NOT_FOUND).send('NotFound');
  }

  if (error.name === 'Conflict') {
    return res.status(httpStatus.CONFLICT).send(error.message);
  }

  if (error.name === 'IdNotValidError') {
    return res.status(httpStatus.BAD_REQUEST).send(error.message);
  }

  console.log(error);
  return res.status(httpStatus.INTERNAL_SERVER_ERROR);
}
