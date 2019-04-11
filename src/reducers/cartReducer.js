import {
  ADD_TO_CART,
  DELETE_CART_ITEM,
  UPDATE_CART,
  READ_CART
} from '../actions/types';

export default function(state = { cart: [] }, action) {
  switch (action.type) {
    case READ_CART:
      console.log(action);
      return { ...state, cart: [...state.cart] };
      break;
    case ADD_TO_CART:
      console.log(action);
      return {
        cart: [...state, ...action.payload],
        totalAmount: totals(action.payload).amount,
        totalQuantity: totals(action.payload).quantity
      };
      console.log(state);
      break;
    case UPDATE_CART:
      console.log(action);
      const cartToUpdate = [...state.cart];
      const indexToUpdate = cartToUpdate.findIndex(function(cart) {
        return cart._id === action._id;
      });
      const updatedCartItem = {
        ...cartToUpdate[indexToUpdate],
        quantity: cartToUpdate[indexToUpdate].quantity + action.unit
      };
      let updatedCart = [
        ...cartToUpdate.slice(0, indexToUpdate),
        updatedCartItem,
        ...cartToUpdate.slice(indexToUpdate + 1)
      ];
      return {
        ...state,
        cart: updatedCart,
        totalAmount: totals(updatedCart).amount,
        totalQuantity: totals(updatedCart).quantity
      };
    case DELETE_CART_ITEM:
      console.log(action);
      return {
        cart: [...state, ...action.payload],
        totalAmount: totals(action.payload).amount,
        totalQuantity: totals(action.payload).quantity
      };
      console.log(state);
      break;
    default:
      return state;
  }
}

export function totals(cart) {
  const totalAmount = cart
    .map(function(cartArr) {
      return cartArr.price * cartArr.quantity;
    })
    .reduce(function(a, b) {
      return a + b;
    }, 0);
  const totalQuantity = cart
    .map(function(qty) {
      return qty.quantity;
    })
    .reduce(function(a, b) {
      return a + b;
    }, 0);
  return { amount: totalAmount.toFixed(2), quantity: totalQuantity };
}
