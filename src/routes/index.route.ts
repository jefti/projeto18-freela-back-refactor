import { Router } from 'express';
import authorizationRouter from './authorization.route';
import publicRouter from './public.route';
import privateRouter from './private.route';

const router = Router();
router.use(authorizationRouter);
router.use(publicRouter);
router.use(privateRouter);
export default router;
