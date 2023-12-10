import bcrypt from 'bcrypt';
import { faker } from '@faker-js/faker';
import { user } from '@prisma/client';
import { postUserType } from '@/types/postUser';
import prisma from '@/database/database';

export function createValidUserBody(): postUserType {
  return {
    email: faker.internet.exampleEmail(),
    nome: faker.internet.userName(),
    foto: faker.image.url() + '.png',
    CPF: fakeNumber(),
    phone: fakeNumber(),
    senha: faker.lorem.word(),
  };
}

export async function registerUser(): Promise<user> {
  const user: postUserType = createValidUserBody();
  const criptUser = createValidPassword(user);
  const createdUser = await prisma.user.create({ data: criptUser });
  return { ...createdUser, senha: user.senha };
}

export async function registerUserAndLogin() {
  const user = await registerUser();
  const session = await prisma.session.create({ data: { userId: user.id, token: '1234' } });
  return session;
}

function fakeNumber() {
  const min = 10000000000;
  const max = 99999999999;
  const number = Math.floor(Math.random() * (max - min)) + min;
  return number.toString();
}

function createValidPassword(body: postUserType): postUserType {
  const { senha, ...bodyWithouPassword } = body;
  const senhaCriptografada = bcrypt.hashSync(senha, 10);
  return { ...bodyWithouPassword, senha: senhaCriptografada };
}
