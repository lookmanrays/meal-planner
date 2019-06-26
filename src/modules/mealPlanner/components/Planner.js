import React from 'react';
import PropTypes from 'prop-types';
import './Planner.css'
import PlannerDayRow from './PlannerDayRow';

const dayList = ['Moday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const mealList = ['Breakfast', 'Lunch', 'Dinner'];

class Planner extends React.Component {
  // ToDo Will be great to use TypeScript. Here is too much types
  static propTypes = {};

  render() {
    const { recipes = {} } = this.props;

    return (
      <div className="Planner">
        <div className="PlannerContent">
          {dayList.map((day) => (
            <PlannerDayRow title={day} recipes={recipes} mealList={mealList} />
          ))}
        </div>
      </div>
    )
  }
}

export default Planner;
