import ProductModel from '../database/models/product.model';

async function getIdProducts(orderId: number): Promise<number[]> {
  const products = await ProductModel.findAll();

  const produtsId = products.filter((product) => product.dataValues.orderId === orderId)
    .map((product) => product.dataValues.id);

  return produtsId;
} 

getIdProducts(1);