import { combineReducers } from 'redux';
import snackbar from './snackbarReducer';
import cart from './cartReducer';
import products from './productsReducer';
import filters from './filterReducer';
import emailSent from './mailerReducer';
import auth from './authReducer';
import isLoading from './loaderReducer';
const rootReducer = combineReducers({
  snackbar,
  cart,
  products,
  filters,
  emailSent,
  auth,
  isLoading
});

export default rootReducer;
