import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import ProductModel from '../../../src/database/models/product.model';
import { newProduct, returnedProduct } from '../../mocks/product.mock';



chai.use(chaiHttp);

describe( 'INTEGRATION - POST /products', function () { 
  beforeEach(function () { sinon.restore(); });

  it('Retorna status 201 e o produto cadastrado.', async function () {
    const mockCreateReturn = ProductModel.build(returnedProduct);    
    sinon.stub(ProductModel, 'create').resolves(mockCreateReturn);

    const response = (await chai.request(app).post('/products').send(newProduct));

    expect(response.status).to.be.equal(201);

    expect(response.body).to.be.deep.equal(mockCreateReturn.toJSON());
  });
});
