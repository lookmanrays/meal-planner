import { FETCH_MEAL_PLANS } from '../actionTypes/mealPlans';

const defaultState = {
  list: [],
};

export default function mealPlans(state = defaultState, action) {
  switch (action.type) {
    case FETCH_MEAL_PLANS:
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
