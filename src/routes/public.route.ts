import { Router } from 'express';
import { getHomeList, getPokemonByAny, getPokemonById } from '@/controllers/public.controller';

const publicRouter = Router();
publicRouter.get('/homeList', getHomeList);
publicRouter.get('/getPokemon/:id', getPokemonById);
publicRouter.get('/search/:key', getPokemonByAny);
export default publicRouter;
