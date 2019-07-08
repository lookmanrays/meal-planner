import React from 'react';
import PropTypes from 'prop-types';
import './InputField.css';

class InputField extends React.Component {
  static propTypes = {
    value: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
  };

  render() {
    const {
      value,
      name,
      type,
      label,
      className,
      onChange,
      onBlur,
      ...otherProps
    } = this.props;

    return (
      <label className="InputField">
        {!!label && (
          <span className="InputFieldLabelText">{label}</span>
        )}
        <input
          {...otherProps}
          type={type}
          name={name}
          value={value}
          className={`InputFieldInput ${className}`}
          onChange={onChange}
          onBlur={onBlur}
        />
      </label>
    );
  }
}

export default InputField;
