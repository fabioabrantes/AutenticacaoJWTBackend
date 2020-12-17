import {Router} from 'express';

import AuthenticateController from '../controllers/AuthenticateController';

const authRouter = Router();

authRouter.post('/auth',AuthenticateController.authenticate);



export default authRouter;