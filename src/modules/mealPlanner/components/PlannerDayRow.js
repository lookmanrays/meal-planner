import React from 'react';
import PropTypes from 'prop-types';
import './Planner.css'

// const imageStub = require('./stub.jpg');

class PlannerDayRow extends React.Component {
  static propTypes = {
    day: PropTypes.shape({
      name: PropTypes.string,
      breakfast: PropTypes.shape({
        recipes: PropTypes.arrayOf(PropTypes.string)
      }),
      lunch: PropTypes.shape({
        recipes: PropTypes.arrayOf(PropTypes.string)
      }),
      dinner: PropTypes.shape({
        recipes: PropTypes.arrayOf(PropTypes.string)
      }),
      nutrition: PropTypes.shape({
        values: PropTypes.shape({
          fat: PropTypes.number,
          carbs: PropTypes.number,
          protein: PropTypes.number,
          calories: PropTypes.number,
        }),
        percentages: PropTypes.shape({
          fat: PropTypes.number,
          carbs: PropTypes.number,
          protein: PropTypes.number,
        }),
      }),
    }),
    title: PropTypes.string.isRequired,
    mealList: PropTypes.arrayOf(PropTypes.string).isRequired,
    recipes: PropTypes.shape({
      [PropTypes.string]: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        images: PropTypes.shape({
          default: PropTypes.string,
          hz: PropTypes.string,
          vt: PropTypes.string,
        })
      }),
    }).isRequired,
    showRecipeChooser: PropTypes.func.isRequired,
  };

  render() {
    const { title, day, mealList, recipes, showRecipeChooser } = this.props;

    return (
      <div className="PlannerDayRow">
        <h3 className="PlannerDayRowMealListName">
          {title}
        </h3>
        <ul className="PlannerDayRowMealList">
          {mealList.map((meal) => (
            <li key={meal} className="PlannerDayRowMealListItem ">
              <div className="PlannerDayRowMealItemName">
                {meal}
              </div>
              <div className="PlannerDayRowMealRecipeInner">
                <div className="PlannerDayRowMealRecipeContainer">
                  {day && day[meal].recipes.length > 0 && (
                    <div className="PlannerDayRowMealRecipe">
                      <img
                        src={recipes[day[meal].recipes[0]].images.default}
                        width="100%"
                        alt={meal}
                      />
                      <a // eslint-disable-line jsx-a11y/anchor-has-content
                        href="/recipeLink"
                        target="_blank"
                        className="PlannerDayRowMealRecipeLink"
                      />
                    </div>
                  )}
                  {!day && (
                    <button
                      type="button"
                      className="PlannerDayRowMealAddRecipe"
                      onClick={showRecipeChooser}
                    >
                      {`Add ${meal}`}
                    </button>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default PlannerDayRow;
