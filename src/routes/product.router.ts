import { Router } from 'express';
import productController from '../controllers/product.controller';
import authProductInputs from '../middlewares/authProduct';

const ProductRouter = Router();

ProductRouter.post('/products', authProductInputs, productController.create);
ProductRouter.get('/products', productController.findAll);

export default ProductRouter;