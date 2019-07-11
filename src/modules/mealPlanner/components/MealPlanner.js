import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import connect from 'react-redux/es/connect/connect';
import PlannerHeader from './PlannerHeader';
import './MealPlanner.css'
import Planner from './Planner';
import Overlay from '../../../components/Overlay/Overlay';
import { getRecipes } from '../../../actions/recipes';
import RecipeChooser from "./RecipeChooser";

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
    })),
    recipes: PropTypes.shape({
      [PropTypes.string]: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
      }),
    }).isRequired,
  };

  constructor(props) {
    super(props);
    const { onGetRecipes } = this.props;

    this.state = {
      showRecipeChooser: false,
    };
    onGetRecipes();
  }

  handleToggleRecipeChooser = () => {
    const { showRecipeChooser } = this.state;

    this.setState({
      showRecipeChooser: !showRecipeChooser,
    })
  };

  render() {
    const { title, description, recipes, isMembersOnly } = this.props;
    const { showRecipeChooser } = this.state;

    return (
      <div className="MealPlanner">
        <div className="MealPlannerLeft">
          <PlannerHeader plan={{
            title,
            description,
            isMembersOnly,
          }} />
          <Planner toggleRecipeChooser={this.handleToggleRecipeChooser} recipes={recipes} />
        </div>
        <div className="MealPlannerRight">
          <div className="MealPlannerAverageNutrition">Here will be average nutrition</div>
        </div>
        {showRecipeChooser && (
          <Overlay>
            <RecipeChooser onClose={this.handleToggleRecipeChooser} />
          </Overlay>
        )}
      </div>
    )
  }
}

export default compose(
  connect(
    (state) => {
      const { recipes } = state;

      return {
        recipes: recipes.byId || {}
      };
    },
    (dispatch) =>
      bindActionCreators(
        {
          onGetRecipes: getRecipes,
        },
        dispatch,
      ),
  ),
)(MealPlanner);
