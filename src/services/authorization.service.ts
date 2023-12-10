import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';
import { ConflictError, UnauthorizedError } from '@/errors/router';
import { authRepository } from '@/repositories/authorization.repository';
import { UserLogin, postUserType } from '@/types/postUser';

async function registerUser(body: postUserType) {
  const checkEmail = await authRepository.findUserByEmail(body.email);
  if (checkEmail) throw ConflictError('email já cadastrado!');
  const checkCPF = await authRepository.findUserByCPF(body.CPF);
  if (checkCPF) throw ConflictError('CPF já cadastrado!');
  const validBody = createValidBody(body);
  const createUser = await authRepository.registerUserDB(validBody);
  return createUser;
}

async function validateLogin(body: UserLogin) {
  const findUser = await authRepository.findUserByEmail(body.email);
  if (!findUser) throw UnauthorizedError('Usuário e/ou senha inválidos');
  const teste = bcrypt.compareSync(body.senha, findUser.senha);
  if (!teste) throw UnauthorizedError('Usuário e/ou senha inválidos');
  delete findUser.senha;
  const session = await authRepository.findSessionByUser(findUser.id);
  if (session) return { ...findUser, token: session.token };
  const token = uuid();
  await authRepository.createSession({ token, userId: findUser.id });
  return { ...findUser, token };
}

async function validateLogout(userId: number) {
  await authRepository.deleteSession(userId);
}

function createValidBody(body: postUserType): postUserType {
  const { senha, ...bodyWithouPassword } = body;
  const senhaCriptografada = bcrypt.hashSync(senha, 10);
  return { ...bodyWithouPassword, senha: senhaCriptografada };
}

export const authService = { registerUser, validateLogin, validateLogout };
