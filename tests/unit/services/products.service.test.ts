import { expect } from 'chai';
import sinon from 'sinon';
import ProductModel from '../../../src/database/models/product.model';
import ProductService from '../../../src/services/product.service';
import productMock from '../../mocks/product.mock';

describe('ProductsService', function () {
  beforeEach(function () { sinon.restore(); });

  it(' retorna status 201 e o produto criado', async function () {
    const mockCreateReturn = ProductModel.build(productMock.returnedProduct);
    sinon.stub(ProductModel, 'create').resolves(mockCreateReturn)

    const serviceResponse = await ProductService.create(productMock.newProduct);

    expect(serviceResponse.status).to.equal('SUCCESSFUL');
    expect(serviceResponse.data).to.deep.equal(productMock.returnedProduct);
  });
});
