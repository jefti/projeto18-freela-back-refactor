import { Router } from 'express';
import authorizationRouter from './authorization.route';

const router = Router();
router.use(authorizationRouter);
authorizationRouter.post('/registro');
export default router;
