import { TOGGLE_FILTER } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case TOGGLE_FILTER:
      console.log(action);
      if (state.includes(action.payload)) {
        let filtersCopy = [...state];
        let index = filtersCopy.indexOf(action.payload);

        filtersCopy.splice(index, 1);

        return [...filtersCopy];
      } else {
        return [...state, action.payload];
      }

      console.log(state);
    default:
      return state;
  }
}
