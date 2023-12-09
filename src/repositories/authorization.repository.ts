import prisma from '@/database/database';
import { postUserType } from '@/types/postUser';

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

export const authRepository = { findUserByEmail, findUserByCPF, registerUserDB };
