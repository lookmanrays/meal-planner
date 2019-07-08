import React from 'react';
import PropTypes from 'prop-types';
import './CheckboxField.css';

class CheckboxField extends React.Component {
  static propTypes = {
    value: PropTypes.string,
    name: PropTypes.string,
    checked: PropTypes.string,
    label: PropTypes.string,
    hint: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func,
  };

  render() {
    const {
      value,
      name,
      checked,
      label,
      hint,
      className,
      onChange,
      ...otherProps
    } = this.props;

    return (
      <div className="CheckboxField">
        <label className="CheckboxFieldLabel">
          <input
            {...otherProps}
            type="checkbox"
            name={name}
            value={value}
            className={`CheckboxFieldInputHidden ${className}`}
            checked={checked}
            onChange={onChange}
          />
          <div className="CheckboxFieldInputCheckbox" />
          {label}
        </label>
        {hint && (
          <div className="CheckboxFieldHint">
            {hint}
          </div>
        )}
      </div>
    );
  }
}

export default CheckboxField;
