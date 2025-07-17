import React from 'react';
import PropTypes from 'prop-types';

import { createSounds as createSoundsModule } from '../../tools/createSounds';
import { createPlayer as createPlayerModule } from '../../tools/createPlayer';
import { SoundsContext } from '../SoundsContext';
import { unlockAudio } from '../../tools/audioUnlock.js';

class Component extends React.PureComponent {
  static propTypes = {
    sounds: PropTypes.object.isRequired,
    createPlayer: PropTypes.func.isRequired,
    createSounds: PropTypes.func.isRequired,
    children: PropTypes.any
  };

  static defaultProps = {
    createPlayer: createPlayerModule,
    createSounds: createSoundsModule
  };

  constructor () {
    super(...arguments);

    const sounds = this.getSounds();

    this.state = { sounds };
  }

  componentDidMount () {
    // Try to unlock audio when sounds are loaded
    setTimeout(() => {
      unlockAudio();
    }, 100);

    // Try again after a longer delay for mobile devices
    setTimeout(() => {
      unlockAudio();
    }, 1000);

    // Try again after 3 seconds for stubborn mobile browsers
    setTimeout(() => {
      unlockAudio();
    }, 3000);
  }

  componentDidUpdate (prevProps) {
    if (prevProps.sounds !== this.props.sounds) {
      const sounds = this.getSounds();
      this.setState({ sounds }); // eslint-disable-line react/no-did-update-set-state
    }
  }

  getSounds () {
    const { sounds, createPlayer, createSounds } = this.props;
    const { settings, players } = createSounds(sounds);

    const soundsPlayers = {};

    Object.keys(players).forEach(name => {
      const player = players[name];
      soundsPlayers[name] = createPlayer({ ...settings, ...player });
    });

    return soundsPlayers;
  }

  render () {
    const { sounds } = this.state;
    const { children } = this.props;

    return (
      <SoundsContext.Provider value={sounds}>
        {children}
      </SoundsContext.Provider>
    );
  }
}

export { Component };
