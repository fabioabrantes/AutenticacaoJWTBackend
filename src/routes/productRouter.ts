import {Router} from 'express';

import ProductController from '../controllers/ProductController';
import authMidlleware from '../middlewares/AuthMiddleware';

const productRouter = Router();
productRouter.use(authMidlleware);

productRouter.post('/products',ProductController.create);
productRouter.get('/products', ProductController.listProducts);
productRouter.get('/products/:id',ProductController.searchProduct);


export default productRouter;