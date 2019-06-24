import React from 'react';
import PropTypes from 'prop-types';
import './MealPlanner.css';

class MealPlannerHeader extends React.Component {
  static propTypes = {
    plan: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      isMembersOnly: PropTypes.bool,
    }),
  };

  constructor(props) {
    super(props);
    const {
      plan: { title, description, isMembersOnly },
    } = this.props;

    this.state = {
      title,
      description,
      isMembersOnly,
      editing: !title,
    }
  }

  handleChangeInput = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { title, description, isMembersOnly, editing } = this.state;

    return (
      <div className="MealPlannerHeader">
        {!editing && (
          <div className="MealPlannerHeaderContent">
            <h2>{title}</h2>
            <div>{description}</div>
          </div>
        )}
        {editing && (
          <div className="MealPlannerHeaderEditor">
            <form className="MealPlannerHeaderEditorForm">
              <div className="MealPlannerHeaderEditorFields">
                <div className="MealPlannerHeaderEditorField">
                  <input
                    type="text"
                    name="title"
                    value={title || ''}
                    className="MealPlannerHeaderEditorInput"
                    onChange={this.handleChangeInput}
                    placeholder="Name your meal plan"
                    maxLength={80}
                  />
                </div>
                <div className="MealPlannerHeaderEditorField">
                  <textarea
                    rows={5}
                    name="description"
                    value={description || ''}
                    className="MealPlannerHeaderEditorTextarea"
                    onChange={this.handleChangeInput}
                    placeholder="Describe your meal plan"
                    maxLength={800}
                  />
                </div>
              </div>
              <div className="MealPlannerHeaderEditorControls"></div>
            </form>
          </div>
        )}
      </div>
    )
  }
}

export default MealPlannerHeader;
