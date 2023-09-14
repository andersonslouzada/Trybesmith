import { OrderSequelizeModel } from "../../src/database/models/order.model";
import { Order } from "../../src/types/Order";

export const ORDER = {
    "id": 1,
    "userId": 2,
  }

export const ORDER_WITH_PRODUCTS = [
  {
    "id": 1,
    "userId": 2,
    "productIds": [
      1,
      2
    ]
  },
]