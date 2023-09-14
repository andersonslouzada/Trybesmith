import { expect } from 'chai';
import sinon from 'sinon';
import ProductModel from '../../../src/database/models/product.model';
import ProductService from '../../../src/services/product.service';
import { newProduct, returnedProduct } from '../../mocks/product.mock';

describe('UNIT - ProductsService', function () {
  beforeEach(function () { sinon.restore(); });

  describe('post /products', function () {
    it(' retorna status 201 e o produto criado', async function () {
      const mockCreateReturn = ProductModel.build(returnedProduct);
      sinon.stub(ProductModel, 'create').resolves(mockCreateReturn)
  
      const serviceResponse = await ProductService.create(newProduct);
  
      expect(serviceResponse.status).to.equal('CREATED');
      expect(serviceResponse.data).to.deep.equal(returnedProduct);
    });
  })

  describe('get /products', function () {
    it(' retorna status 200 e todos os produtos', async function () {
      const mockFindAllReturn = [ProductModel.build(returnedProduct)];
      sinon.stub(ProductModel, 'findAll').resolves(mockFindAllReturn)
  
      const serviceResponse = await ProductService.findAll();
  
      expect(serviceResponse.status).to.equal('SUCCESSFUL');
      expect(serviceResponse.data).to.deep.equal(mockFindAllReturn);
    });
  })

});
