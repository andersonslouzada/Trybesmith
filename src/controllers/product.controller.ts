import { Request, Response } from 'express';
import productService from '../services/product.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

async function create(req: Request, res: Response) {
  const newProduct = req.body;
  const ServiceResponse = await productService.create(newProduct);

  if (ServiceResponse.status !== 'CREATED') {
    return res.status(mapStatusHTTP(ServiceResponse.status)).json(ServiceResponse.data);
  }

  res.status(201).json(ServiceResponse.data);
}

async function findAll(_req: Request, res: Response) {
  const ServiceResponse = await productService.findAll();

  if (ServiceResponse.status !== 'SUCCESSFUL') {
    return res.status(mapStatusHTTP(ServiceResponse.status)).json(ServiceResponse.data);
  }

  res.status(200).json(ServiceResponse.data);
}

export default {
  create,
  findAll,
};
