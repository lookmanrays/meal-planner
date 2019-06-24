import { FETCH_RECIPES } from '../actionTypes/recipes';


const defaultState = {
  list: [],
};

export default function recipes(state = defaultState, action) {
  switch (action.type) {
    case FETCH_RECIPES:
      return {
        ...state,
        ...action.payload,
        error: action.error ? action.error : null,
        loading: action.error === undefined,
      };
    default:
      return state;
  }
}
