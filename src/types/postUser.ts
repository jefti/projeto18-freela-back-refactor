import { session, user } from '@prisma/client';

export type postUserType = Omit<user, 'id'>;
export type UserLogin = { email: string; senha: string };
export type UserSession = Omit<session, 'id'>;
