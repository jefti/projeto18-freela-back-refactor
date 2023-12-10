import { session } from '@prisma/client';
import { Request, Response } from 'express';
import { privateService } from '@/services/private.service';
import { postPokemonType } from '@/types/postPokemon';

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
export async function postPokemon(req: Request, res: Response) {
  const sessao = res.locals.user as session;
  const body = req.body as postPokemonType;
  const resp = await privateService.postPokemon(sessao.userId, body);
  res.send(resp);
}
export async function setAvaliable(req: Request, res: Response) {
  const sessao = res.locals.user as session;
  const { id, value } = req.params;
  const resp = await privateService.setPokemonAvaliable(id, value, sessao);
  res.send(resp);
}
