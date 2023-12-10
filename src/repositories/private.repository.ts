import prisma from '@/database/database';
import { postPokemonType } from '@/types/postPokemon';

async function selectUserPokemonResume(userId: number) {
  const list = await prisma.pokemon.findMany({ where: { userId, disponivel: true }, take: 3 });
  return list;
}

async function selectAllUserPokemon(userId: number) {
  const list = await prisma.pokemon.findMany({ where: { userId } });
  return list;
}

async function createPokemonDB(userId: number, pkmn: postPokemonType) {
  const create = await prisma.pokemon.create({ data: { ...pkmn, userId } });
  return create;
}

async function updateAvaliable(id: number, userId: number, disponivel: boolean) {
  const updated = await prisma.pokemon.update({ where: { id, userId }, data: { disponivel } });
  return updated;
}

export const privateRepository = { selectUserPokemonResume, selectAllUserPokemon, createPokemonDB, updateAvaliable };
