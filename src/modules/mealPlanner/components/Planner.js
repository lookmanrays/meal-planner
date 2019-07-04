import React from 'react';
import PropTypes from 'prop-types';
import './Planner.css'
import PlannerDayRow from './PlannerDayRow';

const dayList = ['moday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
const mealList = ['breakfast', 'lunch', 'dinner'];

class Planner extends React.Component {
  // ToDo Will be great to use TypeScript. Here is too much types
  static propTypes = {
    mealPlan: PropTypes.shape({
      id: PropTypes.string,
      nutritionAverage: PropTypes.shape({
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
      schedule: PropTypes.arrayOf(PropTypes.shape({
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
      })),
      shoppingList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        shoppingSection: PropTypes.string,
      }))
    }),
    recipes: PropTypes.shape({
      [PropTypes.string]: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
      }),
    }).isRequired,
  };

  static defaultProps = {
    mealPlan: {
      name: null,
      nutritionAverage: {
        values: {
          fat: 0,
          carbs: 0,
          protein: 0,
          calories: 0,
        },
        percentages: {
          fat: 0,
          carbs: 0,
          protein: 0,
        }
      },
      schedule: [],
      shoppingList: [],
    }
  };

  render() {
    const { recipes, mealPlan } = this.props;

    return (
      <div className="Planner">
        <div className="PlannerContent">
          {dayList.map((day) => (
            <PlannerDayRow
              key={day}
              title={day}
              recipes={recipes}
              mealList={mealList}
              day={mealPlan.schedule.find((d) => d.name.includes(day))}
              showRecipeChooser={() => console.log('Show chooser!')}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default Planner;
