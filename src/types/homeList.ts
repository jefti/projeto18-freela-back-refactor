import { pokemon, user } from '@prisma/client';

export type PokemonListItem = pokemon & { user: user };
