import prisma from '@/database/database';

async function selectAllPokemon() {
  const resp = await prisma.pokemon.findMany({ select: { user: true } });
  return resp;
}

async function selectPokemonById(id: number) {
  const resp = await prisma.pokemon.findFirst({ where: { id }, select: { user: true } });
  return resp;
}

async function selectPokemonByAny(search: string) {
  const resp = await prisma.pokemon.findMany({
    where: {
      disponivel: true,
      OR: [{ especie: { contains: search.toLowerCase() } }, { nome: { contains: search.toLocaleLowerCase() } }],
    },
    select: {
      user: true,
    },
    take: 20,
  });
  return resp;
}

export const publicRepository = { selectAllPokemon, selectPokemonById, selectPokemonByAny };
