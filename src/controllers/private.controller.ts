import { session } from '@prisma/client';
import { Request, Response } from 'express';
import { privateService } from '@/services/private.service';

export async function getYoursPokemon(req: Request, res: Response) {
  const sessao = res.locals.user as session;
  const resp = await privateService.getYoursPokemon(sessao.userId);
  res.send(resp);
}
export async function getAllYoursPokemon(req: Request, res: Response) {
  const sessao = res.locals.user as session;
  const resp = await privateService.getAllUserPokemon(sessao.userId);
  res.send(resp);
}

export async function createPokemon(req: Request, res: Response) {
  res.send('Em construção!');
}
export async function setAvaliable(req: Request, res: Response) {
  res.send('Em construção!');
}
