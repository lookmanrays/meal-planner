import React from 'react';
import PropTypes from 'prop-types';
import './TextareaField.css';

class TextareaField extends React.Component {
  static propTypes = {
    value: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
  };

  render() {
    const {
      value,
      name,
      label,
      className,
      onChange,
      onBlur,
      ...otherProps
    } = this.props;

    return (
      <label className="TextareaField">
        {!!label && (
          <span className="TextareaFieldLabelText">{label}</span>
        )}
        <textarea
          {...otherProps}
          name={name}
          value={value}
          className={`TextareaFieldInput ${className}`}
          onChange={onChange}
          onBlur={onBlur}
        />
      </label>
    );
  }
}

export default TextareaField;
