import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';

import { SoundsContext } from '../../components/SoundsContext';

// Global audio state
let globalMuted = false;

function withSounds () {
  return Inner => {
    class Sounds extends React.PureComponent {
      static displayName = `Sounds(${Inner.displayName || Inner.name || 'Component'})`;

      static contextType = SoundsContext;

      static propTypes = {
        audio: PropTypes.shape({
          silent: PropTypes.bool
        }),
        forwardedRef: PropTypes.any
      };

      getAudio () {
        return {
          silent: false,
          muted: globalMuted,
          mute: () => {
            globalMuted = true;
            // Mute all sounds in context
            if (this.context) {
              Object.values(this.context).forEach(sound => {
                if (sound && typeof sound.mute === 'function') {
                  sound.mute();
                }
              });
            }
            // Force re-render
            this.forceUpdate();
          },
          unmute: () => {
            globalMuted = false;
            // Unmute all sounds in context
            if (this.context) {
              Object.values(this.context).forEach(sound => {
                if (sound && typeof sound.unmute === 'function') {
                  sound.unmute();
                }
              });
            }
            // Force re-render
            this.forceUpdate();
          },
          ...this.props.audio
        };
      }

      render () {
        const { props, context } = this;
        const { audio, forwardedRef, ...etc } = props;
        const audioContext = this.getAudio();
        const sounds = audioContext.silent ? {} : context;

        return (
          <Inner
            {...etc}
            ref={forwardedRef}
            audio={audioContext}
            sounds={sounds}
          />
        );
      }
    }

    const WithSounds = React.forwardRef((props, ref) => {
      return <Sounds {...props} forwardedRef={ref} />;
    });

    return hoistNonReactStatics(WithSounds, Inner);
  };
}

export { withSounds };
