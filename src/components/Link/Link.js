import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Link } from 'react-router-dom';

class Component extends React.PureComponent {
  static displayName = 'Link';

  static propTypes = {
    theme: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    audio: PropTypes.object.isRequired,
    sounds: PropTypes.object.isRequired,
    className: PropTypes.any,
    activeClassName: PropTypes.any,
    children: PropTypes.any,
    href: PropTypes.string,
    target: PropTypes.string,
    delay: PropTypes.number,
    onClick: PropTypes.func,
    onLinkStart: PropTypes.func,
    onLinkEnd: PropTypes.func,
    isButton: PropTypes.bool
  };

  static defaultProps = {
    activeClassName: 'link-active',
    href: ''
  };

  render () {
    const {
      theme,
      classes,
      audio,
      sounds,
      href,
      target,
      delay,
      className,
      activeClassName,
      children,
      onClick,
      onLinkStart,
      onLinkEnd,
      isButton = false,
      ...etc
    } = this.props;

    const linkMatchesURL = typeof window !== 'undefined' && window.location && window.location.pathname.includes(href);

    if (isButton) {
      return <button
        {...etc}
        className={cx(className, linkMatchesURL && activeClassName)}
        style={{ background: 'transparent', cursor: 'pointer', border: 'none', outline: 'none' }}
        onClick={onClick}
      >
        {children}
      </button>;
    }

    return (
      <Link
        {...etc}
        className={cx(className, linkMatchesURL && activeClassName)}
        to={href}
        target={target}
      >
        {children}
      </Link>
    );
  }
}

export { Component };
