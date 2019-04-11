import { SET_LOADER, REMOVE_LOADER } from './types';

export const setLoader = () => {
  return {
    type: SET_LOADER
  };
};
export const removeLoader = () => {
  return {
    type: REMOVE_LOADER
  };
};
