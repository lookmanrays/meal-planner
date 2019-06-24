import React from 'react';
import PropTypes from 'prop-types';
import MealPlannerHeader from './MealPlannerHeader';
import './MealPlanner.css'

class MealPlanner extends React.Component {
  // ToDo Will be great to use TypeScript. Here is too much types
  static propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    isMembersOnly: PropTypes.bool,
    schedule: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      breakfast: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        rating: PropTypes.number,
        images: PropTypes.shape({
          vt: PropTypes.string,
          hz: PropTypes.string,
          default: PropTypes.string,
        }),
        nutrition: PropTypes.shape({
          values: PropTypes.shape({
            carbs: PropTypes.number,
            fat: PropTypes.number,
            protein: PropTypes.number,
            calories: PropTypes.number,
          }),
          percentages: PropTypes.shape({
            carbs: PropTypes.number,
            fat: PropTypes.number,
            protein: PropTypes.number,
          }),
        }),
      }),
      lunch: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        rating: PropTypes.number,
        images: PropTypes.shape({
          vt: PropTypes.string,
          hz: PropTypes.string,
          default: PropTypes.string,
        }),
        nutrition: PropTypes.shape({
          values: PropTypes.shape({
            carbs: PropTypes.number,
            fat: PropTypes.number,
            protein: PropTypes.number,
            calories: PropTypes.number,
          }),
          percentages: PropTypes.shape({
            carbs: PropTypes.number,
            fat: PropTypes.number,
            protein: PropTypes.number,
          }),
        }),
      }),
      dinner: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        rating: PropTypes.number,
        images: PropTypes.shape({
          vt: PropTypes.string,
          hz: PropTypes.string,
          default: PropTypes.string,
        }),
        nutrition: PropTypes.shape({
          values: PropTypes.shape({
            carbs: PropTypes.number,
            fat: PropTypes.number,
            protein: PropTypes.number,
            calories: PropTypes.number,
          }),
          percentages: PropTypes.shape({
            carbs: PropTypes.number,
            fat: PropTypes.number,
            protein: PropTypes.number,
          }),
        }),
      }),
      nutrition: PropTypes.shape({
        values: PropTypes.shape({
          carbs: PropTypes.number,
          fat: PropTypes.number,
          protein: PropTypes.number,
          calories: PropTypes.number,
        }),
        percentages: PropTypes.shape({
          carbs: PropTypes.number,
          fat: PropTypes.number,
          protein: PropTypes.number,
        }),
      }),
    }))
  };

  render() {
    const { title, description, isMembersOnly } = this.props;

    return (
      <div className="MealPlanner">
        <MealPlannerHeader plan={{
          title,
          description,
          isMembersOnly,
        }} />
      </div>
    )
  }
}

export default MealPlanner;
