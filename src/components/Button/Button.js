import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

class Button extends React.Component {
  static propTypes = {
    theme: PropTypes.string,
    color: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    type: 'button',
    theme: 'primary',
  };

  render() {
    const {
      type,
      theme,
      color,
      className,
      onClick,
      children,
      ...otherProps
    } = this.props;

    return (
      <button
        {...otherProps}
        type={type}
        className={
          `Button ${theme ? `ButtonTheme-${theme}` : ''} ${color ? `ButtonColor-${color}` : ''} ${className}`
        }
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
}

export default Button;
