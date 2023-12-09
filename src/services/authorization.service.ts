import bcrypt from 'bcrypt';
import { ConflictError } from '@/errors/conflictError';
import { authRepository } from '@/repositories/authorization.repository';
import { postUserType } from '@/types/postUser';

async function registerUser(body: postUserType) {
  const checkEmail = await authRepository.findUserByEmail(body.email);
  if (checkEmail) throw ConflictError('email já cadastrado!');
  const checkCPF = await authRepository.findUserByCPF(body.CPF);
  if (checkCPF) throw ConflictError('CPF já cadastrado!');
  const validBody = createValidBody(body);
  const createUser = await authRepository.registerUserDB(validBody);
  return createUser;
}

function createValidBody(body: postUserType): postUserType {
  const { senha, ...bodyWithouPassword } = body;
  const senhaCriptografada = bcrypt.hashSync(senha, 10);
  return { ...bodyWithouPassword, senha: senhaCriptografada };
}

export const authService = { registerUser };
