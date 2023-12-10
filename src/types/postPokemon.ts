import { pokemon } from '@prisma/client';

export type postPokemonType = Omit<pokemon, 'id' | 'userId' | 'disponivel'>;
