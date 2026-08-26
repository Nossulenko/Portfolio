import { SCHEME_EXPAND } from './Menu.constants';
import theme from '../../settings/theme.js';

// Starmap HUD slash-tab styling (see Starmap.js slashTab)
const styles = () => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: [0, 'auto'],
    userSelect: 'none',
    gap: '14px'
  },
  item: {
    display: 'block',
    padding: [9, 24],
    width: 'auto',
    lineHeight: 1,
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: 3,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontFamily: theme.typography.secondary,
    color: '#4A6A8A',
    whiteSpace: 'nowrap',
    flex: '0 0 auto',
    background: 'rgba(10, 20, 40, 0.55)',
    borderBottom: '1px solid #1E3A5F',
    clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 100%, 10px 100%)',
    transition: 'color 200ms ease, background 200ms ease, border-color 200ms ease, text-shadow 200ms ease'
  },
  divisor: {
    display: 'none',
    width: 0,
    color: theme.color.tertiary.main,
    fontWeight: 'normal',
    transform: 'scale(1, 0)',
    transformOrigin: 'center center',
    flex: '0 0 auto'
  },
  link: {
    overflow: 'hidden',
    opacity: ({ scheme }) => (scheme === SCHEME_EXPAND ? 0 : 1),
    flex: '0 0 auto',

    '&.link-active': {
      color: '#FFC94D',
      background: 'rgba(218, 165, 32, 0.12)',
      borderBottom: '1px solid #DAA520',
      textShadow: '0 0 8px rgba(218, 165, 32, 0.7)'
    },
    '&:hover, &:focus': {
      color: '#35EFEF',
      background: 'rgba(53, 239, 239, 0.08)',
      borderBottom: '1px solid #35EFEF',
      textShadow: '0 0 8px rgba(53, 239, 239, 0.6)'
    }
  },

  '@media (min-width: 768px)': {
    root: {
      flexDirection: 'row',
      justifyContent: 'center',
      gap: '0px'
    },
    item: {
      display: 'block',
      marginRight: -4
    },
    divisor: {
      display: 'none'
    }
  },
  '@media (max-width: 767px)': {
    divisor: {
      display: 'none'
    }
  },
  '@media (max-width: 360px)': {
    item: {
      fontSize: '11px'
    }
  }
});

export { styles };
