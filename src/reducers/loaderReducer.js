import { REMOVE_LOADER, SET_LOADER } from '../actions/types';

export default function(state = { isLoading: null }, action) {
  switch (action.type) {
    case SET_LOADER:
      return { ...state, isLoading: true };
    case REMOVE_LOADER:
      return { ...state, isLoading: false };
      break;
    default:
      return state;
  }
}
