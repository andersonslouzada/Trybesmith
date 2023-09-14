import ProductModel from '../database/models/product.model';

async function getIdProducts(orderId: number): Promise<number[]> {
  const products = await ProductModel.findAll();

  const produtsId = products.filter((product) => { 
    const orderIdProduct = Number(product.dataValues.orderId);
    return orderIdProduct === orderId;
  })
    .map((product) => product.dataValues.id);

  return produtsId;
} 

export default getIdProducts;