import React from 'react';
import PropTypes from 'prop-types';
import './MealPlanner.css';

class PlannerMetaEditor extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    isMembersOnly: PropTypes.string,
    onChange: PropTypes.func,
    onChangeCheckbox: PropTypes.func,
    onSubmit: PropTypes.func,
    onCancel: PropTypes.func,
  };

  render() {
    const {
      title,
      description,
      isMembersOnly,
      onChange,
      onChangeCheckbox,
      onSubmit,
      onCancel,
    } = this.props;

    return (
      <div className="MealPlannerHeaderEditor">
        <form className="MealPlannerHeaderEditorForm" onSubmit={this.handleSubmit}>
          <div className="MealPlannerHeaderEditorFields">
            <div className="MealPlannerHeaderEditorField">
              <input
                type="text"
                name="title"
                value={title}
                className="MealPlannerHeaderEditorInput"
                onChange={onChange}
                placeholder="Name your meal plan"
                maxLength={80}
              />
            </div>
            <div className="MealPlannerHeaderEditorField">
              <textarea
                rows={5}
                name="description"
                value={description}
                className="MealPlannerHeaderEditorTextarea"
                onChange={onChange}
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
                  onChange={onChangeCheckbox}
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
            <button className="button primary" type="submit" onClick={onSubmit}>
              Save {/* usually I'm using i18n .json files or data from server */}
            </button>
            <button type="button" className="button secondary" onClick={onCancel}>
              Cancel {/* usually I'm using i18n .json files or data from server */}
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default PlannerMetaEditor;
