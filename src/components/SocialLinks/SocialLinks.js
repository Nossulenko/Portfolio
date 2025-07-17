import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import anime from 'animejs';

import { Link } from '../Link';
import { trackSocialLink } from '../../tools/analytics.js';

class Component extends React.PureComponent {
  static displayName = 'SocialLinks';

  static propTypes = {
    theme: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    energy: PropTypes.object.isRequired,
    audio: PropTypes.object.isRequired,
    sounds: PropTypes.object.isRequired,
    className: PropTypes.any,
    itemClassName: PropTypes.string,
    animateY: PropTypes.bool,
    onEnter: PropTypes.func,
    onExit: PropTypes.func,
    onLinkStart: PropTypes.func,
    onLinkEnd: PropTypes.func
  };

  static defaultProps = {
    animateY: true
  };

  enter () {
    const { energy, sounds, animateY, onEnter } = this.props;
    const { duration } = energy;

    sounds.fade.play();

    anime({
      targets: this.element,
      easing: 'easeOutCubic',
      keyframes: [
        { opacity: 1, duration: duration.enter / 3 },
        { opacity: 0, duration: duration.enter / 5 },
        { opacity: 1, duration: duration.enter / 2 }
      ],
      complete: () => onEnter && onEnter()
    });

    if (animateY) {
      anime({
        targets: this.element,
        easing: 'easeOutCubic',
        translateY: [-10, 0],
        duration: duration.enter
      });
    }
  }

  exit () {
    const { energy, onExit } = this.props;
    const { duration } = energy;

    anime({
      targets: this.element,
      easing: 'easeOutCubic',
      opacity: 0,
      duration: duration.exit,
      complete: () => onExit && onExit()
    });
  }

  handleSocialLinkClick = (platform) => {
    trackSocialLink(platform);
  };

  render () {
    const {
      theme,
      classes,
      energy,
      audio,
      sounds,
      className,
      itemClassName,
      animateY,
      onEnter,
      onExit,
      onLinkStart,
      onLinkEnd,
      ...etc
    } = this.props;

    const A = elprops => (
      <Link
        className={cx(classes.item, itemClassName)}
        onLinkStart={onLinkStart}
        onLinkEnd={onLinkEnd}
        onMouseEnter={() => sounds.hover.play()}
        onClick={() => this.handleSocialLinkClick(elprops.title?.toLowerCase())}
        {...elprops}
      />
    );

    return (
      <div
        className={cx(classes.root, className)}
        ref={ref => (this.element = ref)}
        {...etc}
      >
        <A
          href="mailto:contact@kaizenprojects.be"
          title="E-mail"
        >
          <span className="mdi mdi-email" />
        </A>
        <A
          href="https://x.com/NNossulenko"
          title="Twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="mdi mdi-twitter" />
        </A>
        <A
          href="https://www.linkedin.com/in/nikolai-nossulenko/"
          title="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="mdi mdi-linkedin" />
        </A>
        <A
          href="https://github.com/Nossulenko"
          title="GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="mdi mdi-gitlab" />
        </A>
      </div>
    );
  }
}

export { Component };
