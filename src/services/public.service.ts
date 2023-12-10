import { notFoundError } from '@/errors/notFoundError';
import { UnauthorizedError } from '@/errors/unauthorizedError';
import { publicRepository } from '@/repositories/public.repository';

async function getPokemonList() {
  const search = await publicRepository.selectAllPokemon();
  return search;
}

async function getPokemonById(id: string) {
  const pokemonId = parseInt(id, 10);
  if (isNaN(pokemonId)) throw UnauthorizedError('Id inválido.');
  const search = await publicRepository.selectPokemonById(pokemonId);
  if (!search) throw notFoundError('Pokemon com id não encontrado.');
  return search;
}

async function getPokemonByAny(key: string) {
  const resp = await publicRepository.selectPokemonByAny(key);
  return resp;
}

export const publicService = { getPokemonList, getPokemonById, getPokemonByAny };
