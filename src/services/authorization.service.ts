import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';
import { ConflictError } from '@/errors/conflictError';
import { authRepository } from '@/repositories/authorization.repository';
import { UserLogin, postUserType } from '@/types/postUser';
import { UnauthorizedError } from '@/errors/unauthorizedError';

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
  const token = uuid();
  await authRepository.createSession({ token, userId: findUser.id });
  return { ...findUser, token };
}

function createValidBody(body: postUserType): postUserType {
  const { senha, ...bodyWithouPassword } = body;
  const senhaCriptografada = bcrypt.hashSync(senha, 10);
  return { ...bodyWithouPassword, senha: senhaCriptografada };
}

export const authService = { registerUser, validateLogin };
