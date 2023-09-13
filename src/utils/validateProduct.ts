import { ProductInputtableTypes } from '../database/models/product.model';

function requiredVerify(receivedFields: ProductInputtableTypes): string | undefined {
  if (!receivedFields.name) return '"name" is required';
  if (!receivedFields.price) return '"price" is required';
}

function stringVerify(receivedFields: ProductInputtableTypes): string | undefined {
  if (typeof receivedFields.name !== 'string') return '"name" must be a string';
  if (typeof receivedFields.price !== 'string') return '"price" must be a string';
}

function lengthVerify(receivedFields: ProductInputtableTypes): string | undefined {
  if (receivedFields.name.length < 3) return '"name" length must be at least 3 characters long';
  if (receivedFields.price.length < 3) return '"price" length must be at least 3 characters long';
}

export default { 
  requiredVerify, 
  stringVerify, 
  lengthVerify, 
};