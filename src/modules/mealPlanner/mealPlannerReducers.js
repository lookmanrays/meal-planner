import {
  CREATE_MEAL_PLAN,
  UPDATE_MEAL_PLAN,
  SAVE_MEAL_PLAN,
  DELETE_MEAL_PLAN,
} from './mealPlannerActionTypes';

const defaultState = {
  id: null,
  title: null,
  description: null,
  isMembersOnly: false,
  schedule: [],
};

export default function mealPlanner(state = defaultState, action) {
  switch (action.type) {
    case CREATE_MEAL_PLAN:
    case UPDATE_MEAL_PLAN:
    case SAVE_MEAL_PLAN:
    case DELETE_MEAL_PLAN:
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
