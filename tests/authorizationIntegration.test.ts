import httpStatus from 'http-status';
import supertest from 'supertest';
import app from '../src/app';
import { createValidUserBody, registerUser } from './factories/authorizationFactory';
import { cleanDB } from './factories/cleanDB';

const api = supertest(app);
beforeEach(async () => {
  await cleanDB();
});
afterAll(async () => {
  await cleanDB();
});

describe('Route /Registro', () => {
  it('Should fail if the user dont send the body.', async () => {
    const { text, status } = await api.post('/registro');
    expect(status).toBe(httpStatus.UNPROCESSABLE_ENTITY);
    expect(text).toBe('{"error":"O campo nome é obrigatório"}');
  });
  it('Should has sucess if the user send the correct body.', async () => {
    const user = createValidUserBody();
    const { body, status } = await api.post('/registro').send(user);
    expect(status).toBe(httpStatus.OK);
    expect(body).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        email: user.email,
        nome: user.nome,
        foto: user.foto,
        CPF: user.CPF,
        phone: user.phone,
      }),
    );
  });
});

describe('Route /login', () => {
  it('Should fail if the user dont send the body', async () => {
    const { text, status } = await api.post('/login');
    expect(status).toBe(httpStatus.UNPROCESSABLE_ENTITY);
    expect(text).toBe('{"error":"O campo email é obrigatório"}');
  });
  it('Should has sucess if the user send the correct body.', async () => {
    const user = await registerUser();
    const loginBody = { email: user.email, senha: user.senha };
    const { body, status } = await api.post('/login').send(loginBody);
    expect(status).toBe(httpStatus.OK);
    expect(body).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        email: user.email,
        nome: user.nome,
        foto: user.foto,
        CPF: user.CPF,
        phone: user.phone,
        token: expect.any(String),
      }),
    );
  });
});
