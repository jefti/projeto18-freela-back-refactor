import { NextFunction, Request, Response } from 'express';
import { notFoundError } from '@/errors/notFoundError';
import { UnauthorizedError } from '@/errors/unauthorizedError';
import { authRepository } from '@/repositories/authorization.repository';

export async function validateToken(req: Request, res: Response, next: NextFunction) {
  if (!req.headers) throw UnauthorizedError('Necessário token de validação.');
  const { authorization } = req.headers;
  const token = authorization?.replace('Bearer ', '');
  if (!token) throw UnauthorizedError('Necessário token de validação.');
  const usuario = await authRepository.searchSession(token);
  if (!usuario) throw notFoundError('Token não encontrado.');
  res.locals.user = usuario;
  next();
}
