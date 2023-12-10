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

export const authRepository = { findUserByEmail, findUserByCPF, registerUserDB, createSession };
