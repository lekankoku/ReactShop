import {
  SIGNIN,
  SIGNUP,
  LOGOUT,
  FETCH_AUTH,
  FORGOT_PASSWORD,
  SAVE_TOKEN
} from './types';
import axios from 'axios';
import { addSnackbar } from './snackbarActions';
import { setLoader, removeLoader } from './loaderActions';
import snackbarMessages from '../components/utils/snackbarMessages';
export const login = ({ email, password }, history, from) => {
  console.log(from);
  return async function(dispatch) {
    try {
      dispatch(setLoader());
      const response = await axios.post(`/api/signin`, {
        email,
        password
      });

      dispatch({ type: SIGNIN });

      localStorage.setItem('token', response.data.token);
      dispatch(removeLoader());
      dispatch(addSnackbar(snackbarMessages.auth[1]));
      history.push(from.pathname);
    } catch (error) {
      dispatch(removeLoader());
      if (error.response.status === 400) {
        dispatch(addSnackbar(snackbarMessages.auth[3]));
      }
      if (error.response.status === 401) {
        dispatch(addSnackbar(snackbarMessages.auth[2]));
      }
      if (error.response.status === 500) {
        dispatch(addSnackbar(snackbarMessages.auth[4]));
      }
    }
  };
};

export const signup = ({ firstname, surname, email, password }, history) => {
  return async function(dispatch) {
    try {
      dispatch(setLoader());
      const response = await axios.post('/api/signup', {
        firstname,
        surname,
        email,
        password
      });

      dispatch({ type: SIGNIN });

      localStorage.setItem('token', response.data.token);
      dispatch(removeLoader());
      dispatch(addSnackbar(snackbarMessages.auth[1]));
      history.push('/');
    } catch (error) {
      dispatch(removeLoader());
      if (error.response.status === 422) {
        dispatch(addSnackbar(snackbarMessages.auth[8]));
      }
      if (error.response.status === 500) {
        dispatch(addSnackbar(snackbarMessages.auth[4]));
      }
    }
  };
};
export const forgotPassword = ({ email }, history) => {
  return async function(dispatch) {
    try {
      dispatch(setLoader());
      const response = await axios.post('/api/forgot', {
        email
      });

      dispatch({ type: FORGOT_PASSWORD });

      dispatch(removeLoader());
      dispatch(addSnackbar(snackbarMessages.auth[10]));
      console.log(response);
    } catch (error) {
      dispatch(removeLoader());
      console.log(error);
      if (error.response.status === 422) {
        dispatch(addSnackbar(snackbarMessages.auth[9]));
      }
      if (error.response.status === 401) {
        dispatch(addSnackbar(snackbarMessages.auth[2]));
      }
      if (error.response.status === 500) {
        dispatch(addSnackbar(snackbarMessages.auth[4]));
      }
    }
  };
};
export const logout = () => {
  return function(dispatch) {
    dispatch({ type: LOGOUT });
    dispatch(addSnackbar(snackbarMessages.auth[5]));
  };
};
export const confirmToken = (token, history) => {
  return async function(dispatch) {
    try {
      dispatch(setLoader());
      const response = await axios.post('/api/reset', token);

      dispatch(removeLoader());
    } catch (error) {
      dispatch(removeLoader());
      if (error.response.status === 404) {
        history.push('/auth/forgot');
        dispatch(addSnackbar(snackbarMessages.auth[10]));
      }
      if (error.response.status === 500) {
        dispatch(addSnackbar(snackbarMessages.auth[4]));
      }
    }
  };
};
export const changePassword = ({ password }, token, history) => {
  return async function(dispatch) {
    try {
      dispatch(setLoader());
      const payload = {
        token: token,
        password: { password }
      };
      const response = await axios.post('/api/reset/confirm', {
        token,
        password
      });

      dispatch(removeLoader());
      dispatch(addSnackbar(snackbarMessages.auth[12]));
      history.push('/auth/login');
    } catch (error) {
      dispatch(removeLoader());
      if (error.response.status === 404) {
        dispatch(addSnackbar(snackbarMessages.auth[8]));
      }
      if (error.response.status === 500) {
        dispatch(addSnackbar(snackbarMessages.auth[4]));
      }
    }
  };
};
export const fetchAuth = () => {
  return {
    type: FETCH_AUTH
  };
};
