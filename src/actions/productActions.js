import {
  READ_PRODUCTS,
  UPDATE_STOCK,
  FETCH_PRODUCT,
  GET_CATEGORIES,
  TOGGLE_FILTER
} from './types';

export const getProducts = () => {
  return {
    type: READ_PRODUCTS
  };
};

export const updateStock = (_id, unit) => {
  return {
    type: UPDATE_STOCK,
    _id: _id,
    unit: unit
  };
};
export const getCategories = () => {
  const request = ['SHIRT', 'TROUSER', 'BELT'];
  return {
    type: GET_CATEGORIES,
    payload: request
  };
};
export const toggleFilter = filterTerm => {
  return {
    type: TOGGLE_FILTER,
    payload: filterTerm
  };
};
export const fetchProduct = _id => {
  const request = [
    {
      _id: 1,
      name: 'Sweater',
      price: 500,
      stock: 100,
      category: 'SHIRT',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      pictures: [
        '/assets/img/product/5.jpg',
        '/assets/img/product/1.jpg',
        '/assets/img/product/2.jpg',
        '/assets/img/product/3.jpg'
      ]
    }
  ];
  return {
    type: FETCH_PRODUCT,
    payload: request
  };
};
