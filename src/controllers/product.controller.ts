import { Request, Response } from 'express';
import productService from '../services/product.service';

async function create(req: Request, res: Response) {
  const newProduct = req.body;
  const ServiceResponse = await productService.create(newProduct);

  res.status(201).json(ServiceResponse.data);
}

async function findAll(req: Request, res: Response) {
  const ServiceResponse = await productService.findAll();

  res.status(200).json(ServiceResponse.data);
}

export default {
  create,
  findAll,
};
