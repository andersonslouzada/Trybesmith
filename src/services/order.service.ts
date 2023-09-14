import OrderModel from '../database/models/order.model';
import { Order } from '../types/Order';
import { ServiceResponse } from '../types/ServiceResponse';
import getIdProducts from '../utils/getProductsID';

async function findAll(): Promise<ServiceResponse<Order[]>> {
  const orders = await OrderModel.findAll();

  const ordersWithProducts = await Promise.all(
    orders.map(async (order) => {
      const { id, userId } = order.dataValues;
      const newOrdersObject = {
        id,
        userId,
        productIds: await getIdProducts(id),
      };
      return newOrdersObject;
    }),
  );

  const responseService: ServiceResponse<Order[]> = { 
    status: 'SUCCESSFUL', data: ordersWithProducts, 
  };
  return responseService;
}

export default {
  findAll,
};
