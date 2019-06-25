import React from 'react';
import PropTypes from 'prop-types';
import './MealPlanner.css';
import { ReactComponent as EditIcon } from './EditIcon.svg'

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

  handleChangeCheckbox = (event) => {
    const { name, checked } = event.target;

    this.setState({ [name]: checked });
  };

  handleEdit = () => {
    this.setState({ editing: true });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ editing: false });
  };

  handleCancel = () => {
    const { plan: { title, description, isMembersOnly } } = this.props;

    this.setState({
      title,
      description,
      isMembersOnly,
      editing: false,
    })
  };

  render() {
    const { title, description, isMembersOnly, editing } = this.state;

    return (
      <div className="MealPlannerHeader">
        <div className="MealPlannerHeaderMeta">
          {!editing && (
            <div className="MealPlannerHeaderContent">
              <h2>{title || 'Name your plan'}</h2>
              <div className="description">{description}</div>
              <div className="hint">
                {isMembersOnly
                  ? 'Other members with the link can view this meal plan.'
                  : 'Only you can view this meal plan.'}
              </div>
              <div className="MealPlannerHeaderEditorControls">
                <button className="button warning primary" type="button" onClick={this.handleEdit}>
                  <EditIcon width={15} />
                  Edit {/* usually I'm using i18n .json files or data from server */}
                </button>
                <button type="button" className="button warning secondary">
                  Delete {/* usually I'm using i18n .json files or data from server */}
                </button>
              </div>
            </div>
          )}
          {editing && (
            <div className="MealPlannerHeaderEditor">
              <form className="MealPlannerHeaderEditorForm" onSubmit={this.handleSubmit}>
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
                  <div className="MealPlannerHeaderEditorField">
                    <label htmlFor="isMembersOnly" className="MealPlannerHeaderEditorCheckboxLabel">
                      <input
                        id="isMembersOnly"
                        type="checkbox"
                        name="isMembersOnly"
                        checked={isMembersOnly}
                        className="MealPlannerHeaderEditorInputCheckboxHidden"
                        onChange={this.handleChangeCheckbox}
                      />
                      <div className="MealPlannerHeaderEditorInputCheckbox" />
                      {'Allow other members who have the link to view this meal plan?'}
                    </label>
                    <div className="hint">
                      The meal plan will not be listed, but this allows you to manually share the link with other members.
                    </div>
                  </div>
                </div>
                <div className="MealPlannerHeaderEditorControls">
                  <button className="button primary" type="submit" onClick={this.handleSubmit}>
                    Save {/* usually I'm using i18n .json files or data from server */}
                  </button>
                  <button type="button" className="button secondary" onClick={this.handleCancel}>
                    Cancel {/* usually I'm using i18n .json files or data from server */}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
        <div className="MealPlannerHeaderNutrition"></div>
      </div>
    )
  }
}

export default MealPlannerHeader;
