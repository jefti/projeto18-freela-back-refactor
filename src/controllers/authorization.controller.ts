import { Request, Response } from 'express';
import { session } from '@prisma/client';
import httpStatus from 'http-status';
import { authService } from '@/services/authorization.service';
import { UserLogin, postUserType } from '@/types/postUser';

export async function postUser(req: Request, res: Response) {
  const body = req.body as postUserType;
  const resp = await authService.registerUser(body);
  res.status(httpStatus.CREATED).send(resp);
}

export async function postLogin(req: Request, res: Response) {
  const body = req.body as UserLogin;
  const resp = await authService.validateLogin(body);
  res.send(resp);
}

export async function postLogout(req: Request, res: Response) {
  const usuario = res.locals.user as session;
  delete res.locals.user;
  await authService.validateLogout(usuario.userId);
  res.sendStatus(204);
}
