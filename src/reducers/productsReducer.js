import {
  CREATE_PRODUCT,
  READ_PRODUCTS,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_STOCK,
  FETCH_PRODUCT,
  GET_CATEGORIES
} from '../actions/types';

export default function(
  state = {
    products: [
      {
        _id: 1,
        name: 'Shirt',
        price: 500,
        stock: 100,
        isFeatured: true,
        category: 'SHIRT',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        pictures: [
          '/assets/img/product/5.jpg',
          '/assets/img/product/1.jpg',
          '/assets/img/product/2.jpg',
          '/assets/img/product/3.jpg'
        ]
      },
      {
        _id: 2,
        name: 'Trouser',
        price: 600,
        stock: 120,
        isFeatured: true,
        category: 'TROUSER',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        pictures: [
          '/assets/img/product/1.jpg',
          '/assets/img/product/2.jpg',
          '/assets/img/product/3.jpg',
          '/assets/img/product/4.jpg'
        ]
      },
      {
        _id: 3,
        name: 'Belt',
        price: 700,
        stock: 120,
        isFeatured: false,
        category: 'BELT',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        pictures: [
          '/assets/img/product/4.jpg',
          '/assets/img/product/3.jpg',
          '/assets/img/product/2.jpg',
          '/assets/img/product/1.jpg'
        ]
      }
    ]
  },
  action
) {
  switch (action.type) {
    case FETCH_PRODUCT:
      console.log(action);
      return {
        ...state,
        product: { ...state, ...action.payload }
      };
      break;
    case GET_CATEGORIES:
      return {
        ...state,
        categories: [...state, ...action.payload]
      };
      break;
    case UPDATE_STOCK:
      console.log(action);
      const productsToUpd = [...state.products];
      const index = productsToUpd.findIndex(function(product) {
        return product._id === action._id;
      });
      const updProduct = {
        ...productsToUpd[index],
        stock: productsToUpd[index].stock + action.unit
      };
      return {
        products: [
          ...productsToUpd.slice(0, index),
          updProduct,
          ...productsToUpd.slice(index + 1)
        ]
      };
      break;

    case CREATE_PRODUCT:
      console.log(action);
      return { products: [...state.products, ...action.payload] };
      break;
    case READ_PRODUCTS:
      console.log(action);
      return { ...state, products: [...state.products] };
      break;
    case DELETE_PRODUCT:
      console.log(action);
      const productsCopy = [...state.products];
      const indexTodelete = productsCopy.findIndex(function(product) {
        return product._id === action.payload._id;
      });
      return {
        products: [
          ...productsCopy.slice(0, indexTodelete),
          ...productsCopy.slice(indexTodelete + 1)
        ]
      };
      break;
    case UPDATE_PRODUCT:
      console.log(action);
      const productsToUpdate = [...state.products];
      const indexToUpdate = productsToUpdate.findIndex(function(product) {
        return product._id === action.payload._id;
      });
      const updatedProduct = { ...productsToUpdate[indexToUpdate] };
      return {
        products: [
          ...productsToUpdate.slice(0, indexToUpdate),
          updatedProduct,
          ...productsToUpdate.slice(indexToUpdate + 1)
        ]
      };
      break;

    default:
      return state;
  }
}
