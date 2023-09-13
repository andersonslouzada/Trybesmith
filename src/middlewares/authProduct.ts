import { Request, Response, NextFunction } from 'express';
import validateProducts from '../utils/validateProduct';

async function authProductInputs(req: Request, res:Response, next: NextFunction) {
  const errorRequired = validateProducts.requiredVerify(req.body);
  if (errorRequired) return res.status(400).json({ message: errorRequired });

  const errorType = validateProducts.stringVerify(req.body);
  if (errorType) return res.status(422).json({ message: errorType });

  const errorLength = validateProducts.lengthVerify(req.body);
  if (errorLength) return res.status(422).json({ message: errorLength });
  
  next();
}

export default authProductInputs;