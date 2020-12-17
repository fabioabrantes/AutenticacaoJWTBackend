import {Router} from 'express';

import UserController from '../controllers/UserController';
import authMidlleware from '../middlewares/AuthMiddleware';

const userRouter = Router();

userRouter.post('/users',UserController.create);

userRouter.get('/users',authMidlleware, UserController.listUsers);

userRouter.get('/users/:id',authMidlleware, UserController.searchUser);


export default userRouter;