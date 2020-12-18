import {Request,Response} from 'express';

import {getRepository} from 'typeorm';
import Product from '../models/Product';

class ProductController{

  async listProducts(req:Request,res:Response){
    const productRepository = getRepository(Product);
    const products = await productRepository.find();
    
    return res.status(200).json(products);
  }
  
  async create(req:Request,res:Response){
      
      const {name,price, description} = req.body;
      
      const productRepository = getRepository(Product);
      
      const product = productRepository.create({
        name,
        price, 
        description
      })
    
      await productRepository.save(product);
    
      return res.status(201).json(product);
    
  }
  async searchProduct(req:Request,res:Response){
    
    
    const {id} = req.params;
    
      const productRepository = getRepository(Product);
    
      const product = await productRepository.findOneOrFail(id);
      
    
      return res.json(product);
    }
}

// adiciona o padrão singleton. uma das formas.
export default new ProductController();