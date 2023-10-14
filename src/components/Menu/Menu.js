import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import anime from 'animejs';
import { getViewportRange } from '../../tools/viewport';
import { Link } from '../Link';
import { Text } from '../Text';
import { Secuence } from '../Secuence';
import { SCHEME_NORMAL, SCHEME_EXPAND } from './Menu.constants';

class Component extends React.PureComponent {
  static displayName = 'Menu';

  static propTypes = {
    theme: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    energy: PropTypes.object.isRequired,
    audio: PropTypes.object.isRequired,
    sounds: PropTypes.object.isRequired,
    className: PropTypes.any,
    scheme: PropTypes.oneOf([SCHEME_NORMAL, SCHEME_EXPAND]),
    onEnter: PropTypes.func,
    onExit: PropTypes.func,
    onLinkStart: PropTypes.func,
    onLinkEnd: PropTypes.func,
    open: PropTypes.func,
    account: PropTypes.object
  };

  static defaultProps = {
    scheme: SCHEME_NORMAL
  };

  constructor () {
    super(...arguments);

    this.state = {
      showSecuence: false,
      isConnected: false
    };
  }

  componentDidMount () {
    const { account: { isConnected } } = this.props;

    this.setState({ isConnected });
  }

  componentDidUpdate (prevProps) {
    const { energy } = this.props;
    const { account: { isConnected } } = this.props;
    const { account: { isConnected: prevIsConnected } } = prevProps;

    if (prevProps.energy.status !== energy.status) {
      if (energy.entering) {
        this.setState({ showSecuence: true }); // eslint-disable-line react/no-did-update-set-state
      } else if (energy.exiting) {
        this.setState({ showSecuence: false }); // eslint-disable-line react/no-did-update-set-state
      }
    }

    if (prevIsConnected !== isConnected) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ isConnected });
    }
  }

  componentWillUnmount () {
    const elements = this.element.querySelectorAll('a, b');
    anime.remove(elements);

    window.removeEventListener('route-change', this.onURLChange);
  }

  onURLChange = () => {
    this.forceUpdate();
  }

  enter () {
    const { scheme } = this.props;

    if (scheme === SCHEME_NORMAL) {
      this.animateNormalEnter();
    } else {
      this.animateExpandEnter();
    }
  }

  animateNormalEnter () {
    const { energy, onEnter } = this.props;
    const { duration } = energy;

    const divisors = this.element.querySelectorAll('b');
    const links = this.element.querySelectorAll('a');

    anime.set(links, { opacity: 1 });

    anime({
      targets: divisors,
      easing: 'easeOutCubic',
      scaleY: [0, 1],
      duration: duration.enter,
      delay: (divisor, index) => index * duration.stagger,
      complete: () => onEnter && onEnter()
    });
  }

  animateExpandEnter () {
    const { energy, sounds, onEnter } = this.props;
    const { duration } = energy;
    const viewportRange = getViewportRange();

    const divisors = this.element.querySelectorAll('b');
    const links = this.element.querySelectorAll('a');

    sounds.expand.play();

    if (!viewportRange.small) {
      anime({
        targets: divisors[1],
        easing: 'easeOutCubic',
        scaleY: [0, 1],
        duration: duration.enter / 2
      });
      anime({
        targets: [divisors[0], divisors[2]],
        easing: 'easeOutCubic',
        scaleY: [0, 1],
        translateX: (divisor, index) => [[100, 0, -100][index], 0],
        delay: duration.enter / 2,
        duration: duration.enter / 2
      });
    }

    anime({
      targets: links,
      easing: 'easeOutCubic',
      opacity: 1,
      translateX: (link, index) => [[150, 75, -75, -150][index], 0],
      delay: viewportRange.small ? 0 : duration.enter / 2,
      duration: viewportRange.small ? duration.enter : duration.enter / 2,
      complete: () => onEnter && onEnter()
    });
  }

  exit () {
    const { energy, onExit } = this.props;
    const { duration } = energy;

    const divisors = this.element.querySelectorAll('b');
    const links = this.element.querySelectorAll('a');

    anime({
      targets: divisors,
      easing: 'easeOutCubic',
      scaleY: [1, 0],
      duration: duration.exit
    });
    anime({
      targets: links,
      easing: 'easeOutCubic',
      opacity: 0,
      duration: duration.exit,
      complete: () => onExit && onExit()
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
      scheme,
      onEnter,
      onExit,
      onLinkStart,
      onLinkEnd,
      account,
      ...etc
    } = this.props;
    const { showSecuence, isConnected } = this.state;

    const animateText = scheme === SCHEME_NORMAL;
    const linkProps = {
      className: cx(classes.item, classes.link),
      onMouseEnter: () => sounds.hover.play(),
      onLinkStart,
      onLinkEnd
    };

    const connectWallet = () => {
      const { open } = this.props;

      open();
    };

    return (
      <Secuence
        animation={{ show: showSecuence, independent: true }}
        stagger
      >
        <nav
          className={cx(classes.root, className)}
          ref={(ref) => (this.element = ref)}
          {...etc}
        >
          <Link href='/portfolio' {...linkProps}>
            <Text
              animation={{ animate: animateText }}
              audio={{ silent: !animateText }}
            >
              Portfolio
            </Text>
          </Link>
          <b className={cx(classes.item, classes.divisor)}>|</b>
          <Link href='/about' {...linkProps}>
            <Text
              animation={{ animate: animateText }}
              audio={{ silent: !animateText }}
            >
              About me
            </Text>
          </Link>
          <b className={cx(classes.item, classes.divisor)}>|</b>
          <Link href='/skills' {...linkProps}>
            <Text
              animation={{ animate: animateText }}
              audio={{ silent: !animateText }}
            >
              skills
            </Text>
          </Link>
          <b className={cx(classes.item, classes.divisor)}>|</b>
          <Link href='https://www.linkedin.com/in/nikolai-nossulenko' {...linkProps}>
            <Text
              animation={{ animate: animateText }}
              audio={{ silent: !animateText }}
            >
              Connect
            </Text>
          </Link>
        </nav>
      </Secuence>
    );
  }
}

export { Component };
