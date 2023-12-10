import prisma from '@/database/database';

async function SelectUserPokemonResume(userId: number) {
  const list = await prisma.pokemon.findMany({ where: { userId, disponivel: true }, take: 3 });
  return list;
}

export const PrivateRepository = { SelectUserPokemonResume };
