// import { expect } from "chai";
// import sinon from "sinon";
// import UserModel from "../../../src/database/models/user.model";
// import loginService from "../../../src/services/login.service";
// import loginMock from "../../mocks/login.mock";
// import { Login } from "../../../src/types/Login";

// describe('UNIT - LoginService', function () {
//   beforeEach(function () { sinon.restore(); });

//   describe('post /login', function() {
//     it('ao não receber um username, retorne um erro', async function () {
//       const parameters = loginMock.noUsername;

//       const serviceResponse = await loginService.verifyLogin(parameters);
  
//       expect(serviceResponse.status).to.eq('INVALID_DATA');
//       expect(serviceResponse.data).not.to.have.key('token');
//       expect(serviceResponse.data).to.deep.eq({ message: '"username" and "password" are required' });
//     });

//     it('ao não receber uma senha, retorne um erro', async function () {
//       const parameters = loginMock.noPassword;
  
//       const serviceResponse = await loginService.verifyLogin(parameters);

//       expect(serviceResponse.status).to.eq('INVALID_DATA');
//       expect(serviceResponse.data).not.to.have.key('token');
//       expect(serviceResponse.data).to.deep.eq({ message: '"username" and "password" are required' });
//     });

//     it('ao receber um username inexistente, retorne um erro', async function () {
//       const parameters = loginMock.notExistingUserBody;
//       sinon.stub(UserModel, 'findOne').resolves(null);

//       const serviceResponse = await loginService.verifyLogin(parameters);

//       expect(serviceResponse.status).to.eq('UNAUTHORIZED');
//       expect(serviceResponse.data).not.to.have.key('token');
//       expect(serviceResponse.data).to.deep.eq({ message: "Username or password invalid" });
//     });

//     it('ao receber um username existente e uma senha errada, retorne um erro', async function () {
//       // Arrange
//       const parameters = loginMock.existingUserWithWrongPasswordBody;
//       /* Esta linha será responsável por definir um valor derivado de loginMock.existingUser
//       que é compatível com o tipo esperado como retorno da função `findOne()`  */
//       const mockFindOneReturn = UserModel.build(loginMock.existingUser);
//       /* Aqui utilizamos o valor de mockFindOneReturn pois ele é compatível com o retorno da função `findOne()` */
//       sinon.stub(UserModel, 'findOne').resolves(mockFindOneReturn);

//       // Act
//       const serviceResponse = await loginService.verifyLogin(parameters);

//       // Assert
//       expect(serviceResponse.status).to.eq('UNAUTHORIZED');
//       expect(serviceResponse.data).not.to.have.key('token');
//       expect(serviceResponse.data).to.deep.eq({ message: "Username or password invalid" });
//     });

//     it('ao receber um e-mail e uma senha válida, retorne um token de login', async function () {
//       // Arrange
//       const parameters = loginMock.validLoginBody;
//       const mockFindOneReturn= UserModel.build(loginMock.existingUser);
//       sinon.stub(UserModel, 'findOne').resolves(mockFindOneReturn);
    
//       // ActvalidLoginBody
//       const serviceResponse = await loginService.verifyLogin(parameters);
    
//       // Assert
//       expect(serviceResponse.status).to.eq('SUCCESSFUL');
//       expect(serviceResponse.data).to.have.key('token');
//     });
//   });
// })