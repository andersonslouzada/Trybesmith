import ProductModel, 
{ ProductInputtableTypes, ProductSequelizeModel } from '../database/models/product.model';
import { Product } from '../types/Product';
import { ServiceResponse } from '../types/ServiceResponse';

async function create(product: ProductInputtableTypes): Promise<ServiceResponse<Product>> {
  const newProduct = await ProductModel.create(product);

  const responseService: ServiceResponse<Product> = { 
    status: 'CREATED', data: newProduct.dataValues, 
  };

  return responseService;
}

async function findAll(): Promise<ServiceResponse<ProductSequelizeModel[]>> {
  const products = await ProductModel.findAll();

  const responseService: ServiceResponse<ProductSequelizeModel[]> = { 
    status: 'SUCCESSFUL', data: products, 
  };

  return responseService;
}

export default {
  create,
  findAll,
};