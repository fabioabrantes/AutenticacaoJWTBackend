import {Request,Response} from 'express';
import bcript from 'bcryptjs';
import jwt from 'jsonwebtoken';

import auth from '../config/auth';

import {getRepository} from 'typeorm';
import User from '../models/User';

class AuthenticateController{

   
  async authenticate(req:Request,res:Response){
      
      const {email, password} = req.body;
      const authRepository = getRepository(User);
      const user = await authRepository.findOneOrFail({where:{email}});
      if(!user) return res.sendStatus(401);

      const isValidPassword = bcript.compareSync(password,user.password);

      if(!isValidPassword) return res.sendStatus(401);

      const token = jwt.sign({id:user.id,name:user.name},auth.jwt.secret,{expiresIn:'1d'});
           
      return res.json({
        user,
        token
      });
    
  }
  
}

// adiciona o padrão singleton. uma das formas.
export default new AuthenticateController();