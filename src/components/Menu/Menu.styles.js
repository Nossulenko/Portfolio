import { SCHEME_EXPAND } from './Menu.constants';
import theme from '../../settings/theme.js';

const styles = () => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: [0, 'auto'],
    userSelect: 'none',
    gap: '10px'
  },
  item: {
    display: 'block',
    padding: [10, 15, 10],
    width: 'auto',
    lineHeight: 1,
    fontSize: 14,
    textAlign: 'center',
    textTransform: 'uppercase',
    textShadow: `0 0 5px ${theme.color.secondary.main}`,
    fontFamily: theme.typography.primary,
    color: theme.color.text.main,
    whiteSpace: 'nowrap',
    flex: '0 0 auto'
  },
  divisor: {
    display: 'none',
    width: 0,
    color: theme.color.tertiary.main,
    textShadow: `0 0 5px ${theme.color.tertiary.main}`,
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
      color: theme.color.tertiary.main,
      textShadow: `0 0 5px ${theme.color.tertiary.main}`
    },
    '&:hover, &:focus': {
      color: theme.color.secondary.light,
      textShadow: `0 0 5px ${theme.color.secondary.light}`
    }
  },

  '@media (min-width: 768px)': {
    item: {
      display: 'block'
    },
    divisor: {
      display: 'block'
    }
  },
  '@media (max-width: 360px)': {
    item: {
      fontSize: '12px'
    }
  }
});

export { styles };
