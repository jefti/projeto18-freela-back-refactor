import { Request, Response } from 'express';
import { publicService } from '@/services/public.service';

export async function getHomeList(req: Request, res: Response) {
  const resp = await publicService.getPokemonList();
  res.send(resp);
}

export async function getPokemonById(req: Request, res: Response) {
  const { id } = req.params;
  const resp = await publicService.getPokemonById(id);
  res.send(resp);
}

export async function getPokemonByAny(req: Request, res: Response) {
  res.send('Em construção!');
}
