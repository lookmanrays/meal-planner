import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './Overlay.css';

let openedPortals = 0;

class Overlay extends React.Component {
  static propTypes = {
    tagName: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node,
  };

  static defaultProps = {
    tagName: 'div',
    className: 'OverlayDefault',
  };

  constructor(props) {
    super(props);

    this.node = document.createElement('div');
    document.body.appendChild(this.node);
  }

  componentDidMount() {
    openedPortals += 1;

    if (openedPortals === 1) {
      const rootEl = document.getElementById('root');

      if (rootEl) {
        rootEl.style.filter = 'blur(5px)';
      }

      document.body.style.cssText = `overflow:hidden;`;
    }
  }

  componentWillUnmount() {
    openedPortals -= 1;

    if (openedPortals === 0) {
      const rootEl = document.getElementById('root');

      if (rootEl) {
        rootEl.style.filter = '';
      }

      document.body.style.cssText = '';
    }

    this.node.parentNode.removeChild(this.node);
    this.node = null;
  }

  setRef = (ref) => {
    const { onRef } = this.props;

    this.root = ref;

    if (onRef) {
      onRef(ref);
    }
  };

  render() {
    const { tagName, className, children, ...other } = this.props;

    return ReactDOM.createPortal(
      React.createElement(
        tagName,
        {
          ref: this.setRef,
          className: `Overlay ${className}`,
          ...other,
        },
        [<div key="bg" className="OverlayBackground" />, children],
      ),
      this.node,
    );
  }
}

export default Overlay;
