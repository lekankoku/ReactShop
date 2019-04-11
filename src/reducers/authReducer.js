import { SIGNIN, LOGOUT, FETCH_AUTH, SIGNUP } from '../actions/types';

export default function(state = { auth: false }, action) {
  switch (action.type) {
    case FETCH_AUTH:
      return { ...state };
      break;
    case SIGNIN:
      return { ...state, auth: true };
      break;
    case LOGOUT:
      return { ...state, auth: false };
      break;
    default:
      return state;
  }
}
