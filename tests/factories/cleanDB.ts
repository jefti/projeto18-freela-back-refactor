import prisma from '@/database/database';

export async function cleanDB() {
  await prisma.pokemon.deleteMany({});
  await prisma.session.deleteMany({});
  await prisma.user.deleteMany({});
}
