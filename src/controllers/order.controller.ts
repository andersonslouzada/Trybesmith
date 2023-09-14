import { Request, Response } from 'express';
import orderService from '../services/order.service';

async function findAll(_req: Request, res: Response) {
  const ServiceResponse = await orderService.findAll();

  res.status(200).json(ServiceResponse.data);
}

export default {
  findAll,
};