import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import authMiddleware from './app/middlewares/auth';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';
import AppointmentController from './app/controllers/AppointmentController';
import ScheduleController from './app/controllers/ScheduleController';

const routes = new Router();
const upload = multer(multerConfig);

routes.get('/', async (req, res) => {
  res.json({ status: true });
});

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

// require token
routes.use(authMiddleware);

// users
routes.put('/users', UserController.update);

// providers
routes.get('/providers', ProviderController.index);

// appointments
routes.get('/appointments', AppointmentController.index);
routes.post('/appointments', AppointmentController.store);

// schedules
routes.get('/schedule', ScheduleController.index);

// files
routes.post('/files', upload.single('file'), FileController.store);

export default routes;
