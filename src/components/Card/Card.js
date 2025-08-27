import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

class Component extends React.Component {
  static displayName = 'Card';

  static propTypes = {
    theme: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    energy: PropTypes.object.isRequired,
    className: PropTypes.any,
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(['default', 'elevated', 'glass', 'outlined']),
    padding: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'xl']),
    onClick: PropTypes.func,
    interactive: PropTypes.bool
  };

  static defaultProps = {
    variant: 'default',
    padding: 'md',
    interactive: false
  };

  enter() {
    const { energy, onEnter } = this.props;
    // Add entrance animation logic here
    onEnter && onEnter();
  }

  exit() {
    const { energy, onExit } = this.props;
    // Add exit animation logic here
    onExit && onExit();
  }

  handleClick = (event) => {
    const { onClick, interactive } = this.props;
    if (interactive && onClick) {
      onClick(event);
    }
  };

  render() {
    const {
      classes,
      className,
      children,
      variant,
      padding,
      interactive,
      onClick,
      ...etc
    } = this.props;

    const cardClasses = cx(
      classes.root,
      classes[variant],
      classes[`padding${padding.charAt(0).toUpperCase() + padding.slice(1)}`],
      interactive && classes.interactive,
      className
    );

    return (
      <div
        className={cardClasses}
        onClick={this.handleClick}
        {...etc}
      >
        {children}
      </div>
    );
  }
}

export { Component };
