import { Request, Response } from 'express';
import orderService from '../services/order.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

async function findAll(_req: Request, res: Response) {
  const ServiceResponse = await orderService.findAll();

  if (ServiceResponse.status !== 'SUCCESSFUL') {
    return res.status(mapStatusHTTP(ServiceResponse.status)).json(ServiceResponse.data);
  }

  res.status(200).json(ServiceResponse.data);
}

export default {
  findAll,
};