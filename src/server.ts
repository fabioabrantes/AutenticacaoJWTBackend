import express from 'express';
import cors from 'cors';


import productRouter from './routes/productRouter';
import userRouter from './routes/userRouter';
import authRouter from './routes/authenticateRouter';

import './database/connection';

const server = express();

server.use(express.json());
server.use(cors());

server.use(productRouter);
server.use(userRouter);
server.use(authRouter);


server.listen(3333, ()=>{
  console.log('server running in the port 3333');
})