import { session } from '@prisma/client';
import { ConflictError, UnauthorizedError, notFoundError } from '@/errors/router';
import { privateRepository } from '@/repositories/private.repository';
import { postPokemonType } from '@/types/postPokemon';
import { publicRepository } from '@/repositories/public.repository';

async function getYoursPokemon(userId: number) {
  const list = await privateRepository.selectUserPokemonResume(userId);
  return list;
}

async function getAllUserPokemon(userId: number) {
  const list = await privateRepository.selectAllUserPokemon(userId);
  return list;
}

async function postPokemon(userId: number, body: postPokemonType) {
  const createdPokemon = await privateRepository.createPokemonDB(userId, body);
  return createdPokemon;
}
async function setPokemonAvaliable(id: string, value: string, sessao: session) {
  const formattedId = toNumberOrFail(id);
  const formattedValue = toBooleanOrFail(value);
  const checkPokemon = await publicRepository.selectPokemonById(formattedId);
  if (!checkPokemon) throw notFoundError('Não foi encontrado um pokemon com o id informado.');
  if (checkPokemon.userId != sessao.userId)
    throw UnauthorizedError('O usuário não pode modificar o pokemon informado.');
  const updatedPokemon = await privateRepository.updateAvaliable(formattedId, sessao.userId, formattedValue);
  return updatedPokemon;
}

function toNumberOrFail(value: string): number {
  const formated = parseInt(value, 10);
  if (isNaN(formated)) throw UnauthorizedError('Id inválido.');
  return formated;
}

function toBooleanOrFail(value: string): boolean {
  const harshedTable = { true: true, false: false };
  if (harshedTable[value.toLowerCase()] === undefined) throw ConflictError('Valor informado inválido.');
  return harshedTable[value.toLowerCase()];
}

export const privateService = { getYoursPokemon, getAllUserPokemon, postPokemon, setPokemonAvaliable };
