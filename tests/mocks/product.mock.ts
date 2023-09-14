import { ProductInputtableTypes } from "../../src/database/models/product.model";
import { Product } from "../../src/types/Product";

export const newProduct: ProductInputtableTypes = {
  "name": 'Product 1',
  "price": '100 dollars',
  "orderId": 1,
}

export const returnedProduct: Product= {
  id: 1,
  name: 'Product 1',
  price: '100 dollars',
  orderId: 1,
}


