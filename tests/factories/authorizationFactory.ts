import bcrypt from 'bcrypt';
import { faker } from '@faker-js/faker';
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

export async function registerUser() {
  const user: postUserType = createValidUserBody();
  const criptUser = createValidPassword(user);
  await prisma.user.create({ data: criptUser });
  return user;
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
