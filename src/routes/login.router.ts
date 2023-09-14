import { Router } from 'express';
import loginController from '../controllers/login.controller';

const LoginRouter = Router();

LoginRouter.post('/login', loginController.login);

export default LoginRouter;