import { User } from "../../src/types/User";

const validPassword = 'testando123';

const noUsername = { username: '', password: validPassword };

const validUsername = 'testando 123';

const noPassword = { username: validUsername, password: '' };

const notExistingUserBody = { username: 'xablau', password: validPassword };

const existingUserWithWrongPasswordBody = { username: validUsername, password: 'wrong_password' };

 const existingUser: User =  { 
  id: 1,
  username: 'testando 123',
  vocation: 'trybesmith',
  level: 10,
  password: 'testando123',
}

const validLoginBody = { username: 'testando 123', password: 'testando123' };

export default {
  noUsername,
  noPassword,
  notExistingUserBody,
  existingUserWithWrongPasswordBody,
  existingUser,
  validLoginBody,
};