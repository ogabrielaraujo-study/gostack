import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.get('/', async (req, res) => {
  res.json({ status: true });
});

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

// token
routes.use(authMiddleware);

routes.put('/users', UserController.update);

export default routes;
