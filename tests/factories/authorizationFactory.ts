import { faker } from '@faker-js/faker';
import { postUserType } from '@/types/postUser';

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

function fakeNumber() {
  const min = 10000000000;
  const max = 99999999999;
  const number = Math.floor(Math.random() * (max - min)) + min;
  return number.toString();
}
