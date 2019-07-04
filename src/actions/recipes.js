import { FETCH_RECIPES } from '../actionTypes/recipes';
import recipes from '../data/recipes.json';

export function getRecipes() {
  return (dispatch) =>
  new Promise(async (resolve) => {
    dispatch({ type: FETCH_RECIPES });

    const recipesCopy = await JSON.parse(JSON.stringify(recipes.data.recipes));
    const formattedRecipes = recipesCopy.reduce((sum, curr) => {
      sum[curr.id] = curr;

      return sum;
    }, {});

    dispatch({
      type: FETCH_RECIPES,
      payload: {
        byId: formattedRecipes,
        list: recipesCopy,
      },
      error: false,
    });

    resolve(recipesCopy);
  });
}
