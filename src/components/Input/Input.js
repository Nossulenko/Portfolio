import React from 'react';
import PropTypes from 'prop-types';

class Component extends React.Component {
  static displayName = 'Input';

  static propTypes = {
    className: PropTypes.any,
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    title: PropTypes.string,
    placeholder: PropTypes.string,
    icon: PropTypes.object,
    error: PropTypes.string
  };

  render () {
    const {
      className,
      classes,
      title,
      theme,
      icon,
      error,
      ...etc
    } = this.props;

    return (
      <div>
        {title && <p className={classes.title}>{title}</p>}
        <label className={classes.wrapper}>
          <input type='text' {...etc} className={classes.rootInput} />
          {icon && <img src={icon} alt='input-icon' className={classes.icon} />}
        </label>
        <p style={{
          fontSize: 10,
          color: '#E31D1D'
        }}>{error}</p>
      </div>
    );
  }
}

export { Component };
