import { FETCH_INGREDIENTS } from '../actionTypes/ingredients';


const defaultState = {
  list: [],
};

export default function ingredients(state = defaultState, action) {
  switch (action.type) {
    case FETCH_INGREDIENTS:
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
