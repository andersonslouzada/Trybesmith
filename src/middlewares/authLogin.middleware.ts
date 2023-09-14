import { Request, Response, NextFunction } from 'express';
import jwtUtil from '../utils/jwt.util';
import UserModel from '../database/models/user.model';

function extractToken(authorization: string) {
  return authorization.split(' ')[1];
}

async function authLogin(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token é obrigatório' });
  }

  const token = extractToken(authorization);

  try {
    const decoded = await jwtUtil.verify(token);
    const user = await UserModel.findOne({ where: { username: decoded.username } });
    if (!user) return res.status(401).json({ message: 'Token inválido' }); 
    
    next();
  } catch (e) {
    return res.status(401).json({ message: 'Token inválido' });
  }
}

export default authLogin;