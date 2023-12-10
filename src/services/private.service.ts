import { PrivateRepository } from '@/repositories/private.repository';

async function getYoursPokemon(userId: number) {
  const list = await PrivateRepository.SelectUserPokemonResume(userId);
  return list;
}

async function getAllUserPokemon(userId: number) {
  const list = await PrivateRepository.SelectAllUserPokemon(userId);
  return list;
}

export const privateService = { getYoursPokemon, getAllUserPokemon };
