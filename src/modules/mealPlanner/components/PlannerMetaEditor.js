import React from 'react';
import PropTypes from 'prop-types';
import './MealPlanner.css';
import InputField from '../../../components/FormFields/InputField';
import TextareaField from '../../../components/FormFields/TextareaField';
import CheckboxField from '../../../components/FormFields/CheckboxField';
import Button from '../../../components/Button/Button';

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
            <InputField
              type="text"
              name="title"
              value={title}
              onChange={onChange}
              placeholder="Name your meal plan"
              maxLength={80}
            />
            <TextareaField
              rows={5}
              name="description"
              value={description}
              onChange={onChange}
              placeholder="Describe your meal plan"
              maxLength={800}
            />
            <CheckboxField
              type="checkbox"
              name="isMembersOnly"
              label="Allow other members who have the link to view this meal plan?"
              checked={isMembersOnly}
              onChange={onChangeCheckbox}
              hint="The meal plan will not be listed, but this allows you to manually share the link with other members."
            />
          </div>
          <div className="MealPlannerHeaderEditorControls">
            <Button type="submit" onClick={onSubmit}>
              Save {/* usually I'm using i18n .json files or data from server */}
            </Button>
            <Button type="button" theme="secondary" onClick={onCancel}>
              Cancel {/* usually I'm using i18n .json files or data from server */}
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default PlannerMetaEditor;
