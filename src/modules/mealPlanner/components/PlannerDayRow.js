import React from 'react';
import PropTypes from 'prop-types';
import './Planner.css'

class PlannerDayRow extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    mealList: PropTypes.arrayOf(PropTypes.string),
    recipes: PropTypes.object,
  };

  render() {
    const { title, mealList, recipes } = this.props;

    return (
      <div className="PlannerDayRow">
        <div className="PlannerDayRowName">
          {title}
        </div>
        <div className="PlannerDayRowMealsContainer">
          {mealList.map((meal) => (
            <div className="PlannerDayRowMeal">
              <div className="PlannerDayRowMealName">
                {meal}
              </div>
              <div className="PlannerDayRowMealRecipe"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default PlannerDayRow;
