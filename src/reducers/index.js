import { combineReducers } from 'redux';

import recipes from '../reducers/recipes';
import mealPlans from '../reducers/mealPlans';
import ingredients from '../reducers/ingredients';
import mealPlanner from '../modules/mealPlanner/mealPlannerReducers';

const createRootReducer = () =>
  combineReducers({
    recipes,
    mealPlans,
    ingredients,
    mealPlanner,
  });

export default createRootReducer;
