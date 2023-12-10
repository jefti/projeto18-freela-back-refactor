import { Router } from 'express';
import { postLogin, postUser } from '@/controllers/authorization.controller';
import { validateSchemaMiddleware } from '@/middlewares/validation-middleware';
import { userSchema } from '@/schemas/userSchema';
import { loginSchema } from '@/schemas/loginSchema';

const authorizationRouter = Router();
authorizationRouter.post('/registro', validateSchemaMiddleware(userSchema), postUser);
authorizationRouter.post('/login', validateSchemaMiddleware(loginSchema), postLogin);
export default authorizationRouter;
