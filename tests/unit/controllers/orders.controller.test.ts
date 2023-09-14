import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import OrderModel, { OrderSequelizeModel } from '../../../src/database/models/order.model';
import { ORDER, ORDER_WITH_PRODUCTS } from '../../mocks/order.mock';
import { ServiceResponse } from '../../../src/types/ServiceResponse';
import orderService from '../../../src/services/order.service';
import orderController from '../../../src/controllers/order.controller';
import { Order } from '../../../src/types/Order';

chai.use(sinonChai);

describe('UNIT - OrdersController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  // describe('get /orders', function () {
  //   it('retorna status 200 e todos os produtos', async function () {
  //     const serviceResponse: ServiceResponse<Order[]> = {
  //       status: 'SUCCESSFUL',
  //       data: [ORDER_WITH_PRODUCTS],
  //     };
  //     sinon.stub(orderService, 'findAll').resolves(serviceResponse);

  //     await orderController.findAll(req, res);

  //     expect(res.status).to.have.been.calledWith(200);
  //     expect(res.json).to.have.been.calledWith([productsArray]);

  //   });   
  // });

});
