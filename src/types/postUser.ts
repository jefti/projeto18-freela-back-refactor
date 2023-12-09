import { user } from '@prisma/client';

export type postUserType = Omit<user, 'id'>;
