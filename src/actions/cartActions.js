import { ADD_TO_CART, DELETE_CART_ITEM, UPDATE_CART, READ_CART } from './types';

export const addToCart = product => {
  return {
    type: ADD_TO_CART,
    payload: product
  };
};
export const deleteCartItem = cart => {
  return {
    type: DELETE_CART_ITEM,
    payload: cart
  };
};

export const updateCart = (_id, unit) => {
  return {
    type: UPDATE_CART,
    _id: _id,
    unit: unit
  };
};

export const readCart = () => {
  return {
    type: READ_CART
  };
};
