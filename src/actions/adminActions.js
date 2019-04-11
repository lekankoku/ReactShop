import { CREATE_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT } from './types';

export const createProduct = product => {
  return {
    type: CREATE_PRODUCT,
    payload: product
  };
};

export const updateProduct = product => {
  return {
    type: UPDATE_PRODUCT,
    payload: product
  };
};

export const deleteProduct = id => {
  return {
    type: DELETE_PRODUCT,
    payload: id
  };
};
