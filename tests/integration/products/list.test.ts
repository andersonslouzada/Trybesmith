import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import ProductModel from '../../../src/database/models/product.model';
import productMock from '../../mocks/product.mock';

chai.use(chaiHttp);

describe('GET /products', function () { 
  beforeEach(function () { sinon.restore(); });

  it('Retorna status 200 e um array com os produtos cadastrados.', async function () {
    const mockCreateReturn = ProductModel.build(productMock.returnedProduct)    
    sinon.stub(ProductModel, 'findAll').resolves([mockCreateReturn]);

    const response = await chai.request(app).get('/products');
    
    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal([mockCreateReturn.toJSON()]);
  }); 

});
