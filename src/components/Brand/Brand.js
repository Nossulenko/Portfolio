import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import anime from 'animejs';
import logo from '/src/images/logo_2.png';

import { Link } from '../Link';

class Component extends React.Component {
  static displayName = 'Brand';

  static propTypes = {
    theme: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    energy: PropTypes.object.isRequired,
    audio: PropTypes.object.isRequired,
    sounds: PropTypes.object.isRequired,
    className: PropTypes.any,
    link: PropTypes.string,
    hover: PropTypes.bool,
    stableTime: PropTypes.bool,
    onEnter: PropTypes.func,
    onExit: PropTypes.func,
    onLinkStart: PropTypes.func,
    onLinkEnd: PropTypes.func
  };

  static defaultProps = {
    link: '/'
  };

  constructor () {
    super(...arguments);

    const { energy, stableTime } = this.props;
    this.svgElement = React.createRef();

    if (!stableTime) {
      energy.updateDuration({ enter: 820 });
    }
  }

  componentWillUnmount () {
    const paths = this.svgElement.current.querySelectorAll('path');
    anime.remove(paths);
  }

  enter () {
    const { energy, sounds, stableTime, onEnter } = this.props;
    const paths = this.svgElement.current.querySelectorAll('path');

    anime.set(this.svgElement.current, { opacity: 1 });

    sounds.logo.play();

    anime({
      targets: paths,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'linear',
      delay: (path, index) => stableTime ? 0 : index * energy.duration.stagger,
      duration: path => stableTime ? energy.duration.enter : path.getTotalLength(),
      complete: () => {
        onEnter && onEnter();
      }
    });
  }

  exit () {
    const { energy, sounds, onExit } = this.props;
    const paths = this.svgElement.current.querySelectorAll('path');

    sounds.fade.play();

    anime({
      targets: this.svgElement.current,
      easing: 'easeInCubic',
      duration: energy.duration.exit,
      opacity: 0
    });
    anime({
      targets: paths,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'linear',
      direction: 'reverse',
      duration: energy.duration.exit,
      complete: () => {
        anime.set(this.svgElement.current, { opacity: 0 });
        onExit && onExit();
      }
    });
  }

  render () {
    const {
      theme,
      classes,
      energy,
      audio,
      sounds,
      className,
      link,
      hover,
      stableTime,
      onEnter,
      onExit,
      onLinkStart,
      onLinkEnd,
      ...etc
    } = this.props;

    return (

      <h1 className={cx(classes.root, hover && classes.hover, className)} {...etc}>

        <Link
          className={classes.link}
          href={link}
          title='nossulenko-logo'
          onLinkStart={onLinkStart}
          onLinkEnd={onLinkEnd}
        >
          <span className={classes.title}>nossulenko</span>
          <svg
            ref={this.svgElement}
            className={classes.svg}
            viewBox='0 0 1400 150'
            xmlns='http://www.w3.org/2000/svg'
            onMouseEnter={() => sounds.hover.play()}
          />
          <img src={logo} alt='logo' className={classes.img} />
        </Link>

      </h1>
    );
  }
}

export { Component };
