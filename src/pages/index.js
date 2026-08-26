import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '../tools/withStyles';
import { Secuence } from '../components/Secuence';
import { Brand } from '../components/Brand';
import { Menu } from '../components/Menu';
import { SocialLinks } from '../components/SocialLinks';
import { Legal } from '../components/Legal';
import { Starmap } from '../components/Starmap';
import { withRouter } from '../tools/withRouter/index.js';
import { setupAudioUnlock } from '../tools/audioUnlock.js';
import logo from '../images/logo_2.png';

const styles = () => {
  return {
    root: {
      margin: 'auto',
      width: '100%'
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      margin: [0, 'auto'],
      padding: 20
    },
    brand: {
      margin: [0, 'auto', 30],
      padding: [10, 0],
      width: '100%',
      maxWidth: 700
    },
    brandOverlay: {
      position: 'fixed',
      top: 64,
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 2,
      pointerEvents: 'none',
      textAlign: 'center'
    },
    brandHeading: {
      margin: 0
    },
    brandLogo: {
      display: 'block',
      width: 440,
      maxWidth: 'none',
      height: 'auto',
      filter: 'drop-shadow(0 0 18px rgba(218, 165, 32, 0.55)) drop-shadow(0 0 60px rgba(218, 165, 32, 0.3))'
    },
    brandSub: {
      marginTop: 12,
      fontFamily: 'Electrolize, sans-serif',
      fontSize: 13,
      letterSpacing: 7,
      color: '#7E9FBE',
      textShadow: '0 0 8px rgba(0, 0, 0, 0.9)',
      whiteSpace: 'nowrap'
    },
    '@media (max-width: 900px)': {
      brandLogo: {
        width: 260
      },
      brandSub: {
        fontSize: 10,
        letterSpacing: 4
      }
    },
    menu: {
      margin: [0, 'auto', 20],
      width: '100%',
      maxWidth: 600
    },
    social: {
      margin: [0, 'auto'],
      width: '100%',
      maxWidth: 400
    },
    socialOverlay: {
      position: 'fixed',
      bottom: 48,
      left: '50%',
      transform: 'translateX(-50%)',
      width: '100%',
      maxWidth: 400,
      zIndex: 2
    },
    legal: {
      position: 'absolute',
      left: '50%',
      bottom: 0,
      transform: 'translateX(-50%)'
    },
    legalOverlay: {
      position: 'fixed',
      left: '50%',
      bottom: 4,
      transform: 'translateX(-50%)',
      zIndex: 2
    },
    modeToggle: {
      position: 'fixed',
      top: 10,
      right: 16,
      zIndex: 3,
      display: 'flex',
      fontFamily: 'Electrolize, sans-serif'
    },
    modeButton: {
      appearance: 'none',
      background: 'rgba(10, 20, 40, 0.55)',
      border: 'none',
      borderTop: '1px solid #1E3A5F',
      color: '#4A6A8A',
      fontFamily: 'inherit',
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: 3,
      padding: [9, 24],
      cursor: 'pointer',
      transition: 'color 200ms ease, background 200ms ease, border-color 200ms ease',
      clipPath: 'polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)'
    },
    modeButtonActive: {
      background: 'rgba(218, 165, 32, 0.12)',
      borderTop: '1px solid #DAA520',
      color: '#FFC94D',
      textShadow: '0 0 8px rgba(218, 165, 32, 0.7)'
    }
  };
};

class Component extends React.Component {
  constructor (props) {
    super(props);

    const smallScreen = typeof window !== 'undefined' && window.innerWidth < 768;
    const reducedMotion = typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    this.state = {
      mode: smallScreen || reducedMotion ? '2d' : '3d'
    };
  }

  componentDidMount () {
    // Setup audio unlock for home page
    setupAudioUnlock();
  }

  onLinkStart = (event, { isInternal }) => {
    if (isInternal && this.secuenceElement) {
      this.secuenceElement.exit();
    }
  }

  setMode = mode => {
    this.setState({ mode });
  }

  renderModeToggle () {
    const { classes } = this.props;
    const { mode } = this.state;

    return (
      <div className={classes.modeToggle}>
        <button
          type='button'
          className={mode === '3d' ? `${classes.modeButton} ${classes.modeButtonActive}` : classes.modeButton}
          onClick={() => this.setMode('3d')}
        >
          3D
        </button>
        <button
          type='button'
          className={mode === '2d' ? `${classes.modeButton} ${classes.modeButtonActive}` : classes.modeButton}
          style={{ marginLeft: -4 }}
          onClick={() => this.setMode('2d')}
        >
          2D
        </button>
      </div>
    );
  }

  render () {
    const { classes } = this.props;
    const { mode } = this.state;

    if (mode === '3d') {
      return (
        <div className={classes.root}>
          <Starmap onFallback={() => this.setMode('2d')} />
          {this.renderModeToggle()}
          <div className={classes.brandOverlay}>
            <h1 className={classes.brandHeading}>
              <img src={logo} alt='nossulenko' className={classes.brandLogo} />
            </h1>
            <div className={classes.brandSub}>AI ENGINEER &amp; PRODUCT LEADER</div>
          </div>
          <Secuence ref={ref => (this.secuenceElement = ref)}>
            <div className={classes.socialOverlay}>
              <SocialLinks className={classes.social} onLinkStart={this.onLinkStart} />
            </div>
            <Legal className={classes.legalOverlay} opaque onLinkStart={this.onLinkStart} />
          </Secuence>
        </div>
      );
    }

    return (
      <Secuence ref={ref => (this.secuenceElement = ref)}>
        <div className={classes.root}>
          {this.renderModeToggle()}
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
