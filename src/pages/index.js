import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '../tools/withStyles';
import { Secuence } from '../components/Secuence';
import { Brand } from '../components/Brand';
import { Menu } from '../components/Menu';
import { SocialLinks } from '../components/SocialLinks';
import { Legal } from '../components/Legal';
import { SoundNotification } from '../components/SoundNotification';
import { withRouter } from '../tools/withRouter/index.js';
import { setupAudioUnlock } from '../tools/audioUnlock.js';

const styles = () => {
  return {
    root: {
      margin: 'auto',
      width: '100%',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #0a0a0a 0%, #181A20 50%, #1e1e2e 100%)',
      position: 'relative',
      overflow: 'hidden'
    },
    backgroundOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'radial-gradient(circle at 50% 50%, rgba(218, 165, 32, 0.03) 0%, transparent 70%)',
      pointerEvents: 'none',
      zIndex: 0
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      margin: [0, 'auto'],
      padding: '32px 20px',
      width: '100%',
      maxWidth: '1200px',
      position: 'relative',
      zIndex: 1,
      gap: '48px'
    },
    brand: {
      margin: [0, 'auto', 0],
      padding: [20, 0],
      width: '100%',
      maxWidth: 700,
      textAlign: 'center'
    },
    menu: {
      margin: [0, 'auto', 0],
      width: '100%',
      maxWidth: 800
    },
    social: {
      margin: [0, 'auto', 0],
      width: '100%',
      maxWidth: 500
    },
    legal: {
      position: 'absolute',
      left: '50%',
      bottom: '32px',
      transform: 'translateX(-50%)',
      zIndex: 2
    },
    '@media (max-width: 768px)': {
      content: {
        padding: '24px 16px',
        gap: '32px'
      },
      brand: {
        maxWidth: '100%',
        padding: [16, 0]
      },
      menu: {
        maxWidth: '100%'
      },
      social: {
        maxWidth: '100%'
      },
      legal: {
        bottom: '24px'
      }
    },
    '@media (max-width: 480px)': {
      content: {
        padding: '20px 12px',
        gap: '24px'
      },
      legal: {
        bottom: '20px'
      }
    }
  };
};

class Component extends React.Component {
  componentDidMount () {
    // Setup audio unlock for home page
    setupAudioUnlock();
  }

  onLinkStart = (event, { isInternal }) => {
    if (isInternal) {
      this.secuenceElement.exit();
    }
  }

  render () {
    const { classes } = this.props;

    return (
      <Secuence ref={ref => (this.secuenceElement = ref)}>
        <div className={classes.root}>
          <div className={classes.backgroundOverlay} />
          <SoundNotification />
          <div className={classes.content}>
            <Brand
              className={classes.brand}
              onLinkStart={this.onLinkStart}
            />
            <Menu
              className={classes.menu}
              animation={{ duration: { enter: 400 } }}
            />
            <SocialLinks
              className={classes.social}
              onLinkStart={this.onLinkStart}
            />
          </div>
          <Legal
            className={classes.legal}
            opaque
            onLinkStart={this.onLinkStart}
          />
        </div>
      </Secuence>
    );
  }
}

Component.propTypes = {
  classes: PropTypes.any.isRequired
};

export default withRouter(withStyles(styles)(Component));
