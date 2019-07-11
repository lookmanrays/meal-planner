import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as CloseIcon } from './CloseIcon.svg'
import './RecipeChooser.css';

class RecipeChooser extends React.Component {
  static propTypes = {
    onClose: PropTypes.func,
  };

  render() {
    const { onClose } = this.props;

    return (
      <div className="RecipeChooser">
        <button type="button" className="RecipeChooserClose" onClick={onClose}>
          <CloseIcon width={40} />
        </button>
        <div className="RecipeChooserContent">
          <h3 className="RecipeChooserTitle">Choose a recipe</h3>
        </div>
      </div>
    );
  }
}

export default RecipeChooser;
