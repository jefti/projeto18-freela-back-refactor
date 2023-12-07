import prisma from '@/database/database';

export async function cleanDB(cleanCategory: boolean) {
  if (cleanCategory) {
    await prisma.pokemon.deleteMany({});
    await prisma.user.deleteMany({});
  }
}
