import { PrivateRepository } from '@/repositories/private.repository';

async function getYoursPokemon(userId: number) {
  const list = await PrivateRepository.SelectUserPokemonResume(userId);
  return list;
}

export const privateService = { getYoursPokemon };
