import React from 'react';
import PropTypes from 'prop-types';

import { Layout } from '../../components/Layout';
import { Background } from '../../components/Background';
import { App } from '../../components/App';
import { Popup } from '../../components/Popup';
import { Outlet } from 'react-router-dom';
import theme from '../../settings/theme.js';

class Component extends React.Component {
  static displayName = 'Template';

  static propTypes = {
    location: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    layout: PropTypes.object,
    background: PropTypes.object,
    children: PropTypes.any
  };

  static defaultProps = {
    layout: {},
    background: {}
  };

  constructor () {
    super(...arguments);

    this.state = {
      show: false,
      enterShow: false,
      isURLContent: false,

      // Initially enter element is animation shown.
      enterAnimationShow: true
    };
  }

  componentDidMount () {
    setTimeout(
      () => this.setState({ enterShow: true }),
      theme.animation.time
    );
  }

  onEnter = () => {
    this.setState({ enterAnimationShow: false });
    setTimeout(
      () => this.setState({ show: true }),
      theme.animation.time + theme.animation.stagger
    );
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    const { location } = prevProps;
    const isURLContent = ['/about', '/skills'].find(path => {
      return location.pathname.includes(path);
    });

    if (prevState.isURLContent !== isURLContent) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ isURLContent });
    }
  }

  render () {
    const { show, enterShow, enterAnimationShow, isURLContent } = this.state;
    const { classes, layout, background } = this.props;

    return (
      <Layout {...layout}>
        <Background
          {...background}
          animation={{ show, ...background.animation }}
        >
          {isURLContent ? <App><Outlet /></App> : <Outlet />}

          {!show && (
            <div className={classes.enterOverlay}>
              {enterShow && (
                <Popup
                  className={classes.enterElement}
                  ref={ref => (this.enterElement = ref)}
                  audio={{ silent: true }}
                  animation={{ independent: true, show: enterAnimationShow }}
                  message='nossulenko.com uses sounds.'
                  option='Enter'
                  onOption={this.onEnter}
                />
              )}
            </div>
          )}
        </Background>
      </Layout>
    );
  }
}

export { Component };
