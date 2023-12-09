import { Router } from 'express';
import { postUser } from '@/controllers/authorization.controller';
import { validateSchemaMiddleware } from '@/middlewares/validation-middleware';
import { userSchema } from '@/schemas/userSchema';

const authorizationRouter = Router();
authorizationRouter.post('/registro', validateSchemaMiddleware(userSchema), postUser);
export default authorizationRouter;
