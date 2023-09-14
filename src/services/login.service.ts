import bcrypt from 'bcryptjs';
import { Login } from '../types/Login';
import { ServiceResponse } from '../types/ServiceResponse';
import { Token } from '../types/Token';
import UserModel from '../database/models/user.model';
import jwtUtil from '../utils/jwt.util';

async function verifyLogin(login: Login): Promise<ServiceResponse<Token>> {
  if (!login.username || !login.password) { 
    return { status: 'INVALID_DATA', data: { message: '"username" and "password" are required' } };
  }

  const fondUser = await UserModel.findOne({ where: { username: login.username } });

  if (!fondUser || !bcrypt.compareSync(login.password, fondUser.dataValues.password)) {
    return { status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' } };
  }

  const { id, username } = fondUser.dataValues;

  const token = jwtUtil.sign({ id, username });

  return { status: 'SUCCESSFUL', data: { token } };
}

export default { verifyLogin };