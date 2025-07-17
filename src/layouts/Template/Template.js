import React from 'react';
import PropTypes from 'prop-types';

import { Layout } from '../../components/Layout';
import { Background } from '../../components/Background';
import { App } from '../../components/App';
import { Outlet } from 'react-router-dom';
import { setupAudioUnlock } from '../../tools/audioUnlock.js';

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
      show: true,
      isURLContent: false
    };
  }

  componentDidMount () {
    // Setup audio unlock on user interactions
    setupAudioUnlock();
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    const { location } = prevProps;
    const isURLContent = ['/about', '/skills', '/recommendations'].find(path => {
      return location.pathname.includes(path);
    });

    if (prevState.isURLContent !== isURLContent) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ isURLContent });
    }
  }

  render () {
    const { show, isURLContent } = this.state;
    const { layout, background } = this.props;

    return (
      <Layout {...layout}>
        <Background
          {...background}
          animation={{ show, ...background.animation }}
        >
          {isURLContent ? <App><Outlet /></App> : <Outlet />}
        </Background>
      </Layout>
    );
  }
}

export { Component };
