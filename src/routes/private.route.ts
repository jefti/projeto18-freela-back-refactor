import { Router } from 'express';
import { getAllYoursPokemon, getYoursPokemon, postPokemon, setAvaliable } from '@/controllers/private.controller';
import { validateToken } from '@/middlewares/tokenValidation-middleware';
import { validateSchemaMiddleware } from '@/middlewares/validation-middleware';
import { PokemonSchema } from '@/schemas/pokemonSchema';

const privateRouter = Router();
privateRouter.use(validateToken);
privateRouter.get('/user/Pokemons/resume', getYoursPokemon);
privateRouter.get('/user/pokemons/all', getAllYoursPokemon);
privateRouter.post('/user/pokemon', validateSchemaMiddleware(PokemonSchema), postPokemon);
privateRouter.put('/pokemon/:id/:value', setAvaliable);
export default privateRouter;
