import { publicRepository } from '@/repositories/public.repository';

async function getPokemonList() {
  const search = await publicRepository.selectAllPokemon();
  return search;
}

async function getPokemonById() {
  // const search = await publicRepository.selectAllPokemon(id);
  // return search;
}

export const publicService = { getPokemonList, getPokemonById };
