import { Router } from 'express';
import { postLogin, postLogout, postUser } from '@/controllers/authorization.controller';
import { validateSchemaMiddleware } from '@/middlewares/validation-middleware';
import { userSchema } from '@/schemas/userSchema';
import { loginSchema } from '@/schemas/loginSchema';
import { validateToken } from '@/middlewares/tokenValidation-middleware';

const authorizationRouter = Router();
authorizationRouter.post('/registro', validateSchemaMiddleware(userSchema), postUser);
authorizationRouter.post('/login', validateSchemaMiddleware(loginSchema), postLogin);
authorizationRouter.post('/logout', validateToken, postLogout);
export default authorizationRouter;
