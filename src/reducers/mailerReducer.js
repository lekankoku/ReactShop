import { SEND_EMAIL } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case SEND_EMAIL:
      return action.payload || false;
    default:
      return state;
  }
}
