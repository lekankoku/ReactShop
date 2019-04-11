import { ADD_SNACKBAR, REMOVE_SNACKBAR } from './types';

export const addSnackbar = snackbarDetails => {
  const message = snackbarDetails.message;
  const icon = snackbarDetails.icon;
  return {
    type: ADD_SNACKBAR,
    message,
    icon,
    isOpen: true
  };
};
export const removeSnackbar = () => {
  return {
    type: REMOVE_SNACKBAR,
    isOpen: false
  };
};
