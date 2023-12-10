import { Router } from 'express';
import { createPokemon, getAllYoursPokemon, getYoursPokemon, setAvaliable } from '@/controllers/private.controller';
import { validateToken } from '@/middlewares/tokenValidation-middleware';
import { validateSchemaMiddleware } from '@/middlewares/validation-middleware';
import { PokemonSchema } from '@/schemas/pokemonSchema';

const privateRouter = Router();
privateRouter.use(validateToken);
privateRouter.get('/yoursPokemons', getYoursPokemon);
privateRouter.get('/allYoursPokemons', getAllYoursPokemon);
privateRouter.post('/pokemon', validateSchemaMiddleware(PokemonSchema), createPokemon);
privateRouter.put('/setAvaliable/:id/:value', setAvaliable);
export default privateRouter;
