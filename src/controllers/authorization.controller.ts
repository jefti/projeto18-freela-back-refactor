import { Request, Response } from 'express';
import { authService } from '@/services/authorization.service';
import { UserLogin, postUserType } from '@/types/postUser';

export async function postUser(req: Request, res: Response) {
  const body = req.body as postUserType;
  const resp = await authService.registerUser(body);
  res.send(resp);
}

export async function postLogin(req: Request, res: Response) {
  const body = req.body as UserLogin;
  const resp = await authService.validateLogin(body);
  res.send(resp);
}
