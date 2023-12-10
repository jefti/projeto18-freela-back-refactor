import prisma from '@/database/database';
import { UserSession, postUserType } from '@/types/postUser';

async function findUserByEmail(email: string) {
  const resp = await prisma.user.findFirst({ where: { email } });
  return resp;
}

async function findUserByCPF(CPF: string) {
  const resp = await prisma.user.findFirst({ where: { CPF } });
  return resp;
}

async function registerUserDB(body: postUserType) {
  const newUser = await prisma.user.create({ data: body });
  delete newUser.senha;
  return newUser;
}

async function createSession(session: UserSession) {
  const newSession = await prisma.session.create({ data: session });
  return newSession;
}

async function searchSession(token: string) {
  const findSearch = await prisma.session.findFirst({ where: { token } });
  return findSearch;
}

async function findSessionByUser(userId: number) {
  const findSearch = await prisma.session.findFirst({ where: { userId } });
  return findSearch;
}

async function deleteSession(userId: number) {
  await prisma.session.delete({ where: { userId } });
}

export const authRepository = {
  findUserByEmail,
  findUserByCPF,
  registerUserDB,
  createSession,
  searchSession,
  deleteSession,
  findSessionByUser,
};
