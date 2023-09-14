import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import productService from '../../../src/services/product.service';
import productController from '../../../src/controllers/product.controller';
import { newProduct, returnedProduct } from '../../mocks/product.mock';
import { ServiceResponse } from '../../../src/types/ServiceResponse';
import { Product } from '../../../src/types/Product';
import ProductModel, { ProductSequelizeModel } from '../../../src/database/models/product.model';

chai.use(sinonChai);

describe('UNIT - ProductsController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  describe('post /products', function () {
    it('retorna status 201 e o produto criado', async function () {
      req.body = newProduct;

      const serviceResponse: ServiceResponse<Product> = {
        status: 'CREATED',
        data: returnedProduct,
      };
      sinon.stub(productService, 'create').resolves(serviceResponse);

      await productController.create(req, res);

      expect(res.status).to.have.been.calledWith(201);
      expect(res.json).to.have.been.calledWith(returnedProduct);

    });   
  });

  describe('get /products', function () {
    it('retorna status 200 e todos os produtos', async function () {
      const productsArray = ProductModel.build(returnedProduct);
      const serviceResponse: ServiceResponse<ProductSequelizeModel[]> = {
        status: 'SUCCESSFUL',
        data: [productsArray],
      };
      sinon.stub(productService, 'findAll').resolves(serviceResponse);

      await productController.findAll(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith([productsArray]);

    });   
  });

});