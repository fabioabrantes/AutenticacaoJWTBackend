import {Request,Response} from 'express';
import bcript from 'bcryptjs';

import {getRepository} from 'typeorm';
import User from '../models/User';

class UserController{

  async listUsers(req:Request,res:Response){

    const userRepository = getRepository(User);
    const users = await userRepository.find();
    
    return res.status(200).json(users);
  }
  
  async create(req:Request,res:Response){
    
      const {name,email, password} = req.body;
      console.log(name,email, password);
      const userRepository = getRepository(User);
      
      const user = userRepository.create({
        name,
        email, 
        password
      })
    
      user.password = bcript.hashSync(user.password);
      await userRepository.save(user);
    
      return res.status(201).json(user);
    
  }
  async searchUser(req:Request,res:Response){
      const {id} = req.params;
    
      const userRepository = getRepository(User);
    
      const user = await userRepository.findOneOrFail(id);
      
    
      return res.json(user);
    }
}

// adiciona o padrão singleton. uma das formas.
export default new UserController();