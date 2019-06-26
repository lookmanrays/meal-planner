import React from 'react';
import PropTypes from 'prop-types';
import './MealPlanner.css';
import { ReactComponent as EditIcon } from './EditIcon.svg'
import PlannerMetaEditor from "./PlannerMetaEditor";

class PlannerHeader extends React.Component {
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
    console.log(111)

    this.setState({ [name]: value });
  };

  handleChangeCheckbox = (event) => {
    const { name, checked } = event.target;
    console.log(event)

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
            <PlannerMetaEditor
              title={title}
              description={description}
              isMembersOnly={isMembersOnly}
              onChange={this.handleChangeInput}
              onChangeCheckbox={this.handleChangeCheckbox}
              onSubmit={this.handleSubmit}
              onCancel={this.handleCancel}
            />
          )}
        </div>
        <div className="MealPlannerHeaderNutrition">Here will be average nutrition</div>
      </div>
    )
  }
}

export default PlannerHeader;
