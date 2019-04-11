import { ADD_SNACKBAR, REMOVE_SNACKBAR } from '../actions/types';

export default function(state = { snackbars: [] }, action) {
  let snackbar;
  let snackbarsToDel;
  switch (action.type) {
    case ADD_SNACKBAR:
      console.log(action);
      snackbar = {
        message: action.message,
        icon: action.icon,
        isOpen: true
      };
      console.log(snackbar);

      return { snackbars: [...state, snackbar] };

    case REMOVE_SNACKBAR:
      snackbarsToDel = [...state.snackbars];

      return { snackbars: [...snackbarsToDel.unshift()] };
    default:
      return state;
  }
}
