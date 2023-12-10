import { Router } from 'express';
import authorizationRouter from './authorization.route';
import publicRouter from './public.route';

const router = Router();
router.use(authorizationRouter);
router.use(publicRouter);

export default router;
