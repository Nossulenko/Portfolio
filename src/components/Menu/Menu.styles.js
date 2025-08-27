import { SCHEME_EXPAND } from './Menu.constants';
import theme from '../../settings/theme.js';

const styles = () => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: [0, 'auto'],
    userSelect: 'none',
    gap: theme.spacing.lg,
    padding: theme.spacing.md,
    background: theme.color.background.glass,
    backdropFilter: 'blur(20px) saturate(180%)',
    WebkitBackdropFilter: 'blur(20px) saturate(180%)',
    borderRadius: theme.borderRadius.xl,
    border: `1px solid rgba(218, 165, 32, 0.1)`,
    boxShadow: theme.shadows.md,
    transition: 'all 0.3s ease',
    '&:hover': {
      borderColor: 'rgba(218, 165, 32, 0.2)',
      boxShadow: theme.shadows.lg
    }
  },
  item: {
    display: 'block',
    padding: [theme.spacing.sm, theme.spacing.md],
    width: 'auto',
    lineHeight: 1.2,
    fontSize: 16,
    textAlign: 'center',
    textTransform: 'uppercase',
    textShadow: `0 0 8px ${theme.color.secondary.main}`,
    fontFamily: theme.typography.primary,
    color: theme.color.text.main,
    whiteSpace: 'nowrap',
    flex: '0 0 auto',
    fontWeight: 600,
    letterSpacing: '0.5px',
    transition: 'all 0.3s ease',
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: '50%',
      width: 0,
      height: '2px',
      background: `linear-gradient(90deg, ${theme.color.secondary.main}, ${theme.color.secondary.light})`,
      transition: 'all 0.3s ease',
      transform: 'translateX(-50%)'
    }
  },
  divisor: {
    display: 'none',
    width: 0,
    color: theme.color.secondary.main,
    textShadow: `0 0 8px ${theme.color.secondary.main}`,
    fontWeight: 'normal',
    transform: 'scale(1, 0)',
    transformOrigin: 'center center',
    flex: '0 0 auto',
    opacity: 0.6
  },
  link: {
    overflow: 'hidden',
    opacity: ({ scheme }) => (scheme === SCHEME_EXPAND ? 0 : 1),
    flex: '0 0 auto',
    borderRadius: theme.borderRadius.md,
    transition: 'all 0.3s ease',

    '&.link-active': {
      color: theme.color.secondary.main,
      textShadow: `0 0 12px ${theme.color.secondary.main}`,
      '&::before': {
        width: '80%'
      }
    },
    '&:hover, &:focus': {
      color: theme.color.secondary.light,
      textShadow: `0 0 12px ${theme.color.secondary.light}`,
      transform: 'translateY(-2px)',
      '&::before': {
        width: '80%'
      }
    },
    '&:active': {
      transform: 'translateY(0px)'
    }
  },

  '@media (min-width: 768px)': {
    root: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      gap: theme.spacing.md,
      padding: [theme.spacing.md, theme.spacing.xl],
      maxWidth: '800px'
    },
    item: {
      display: 'block',
      fontSize: 18
    },
    divisor: {
      display: 'block'
    }
  },
  '@media (max-width: 767px)': {
    root: {
      padding: theme.spacing.md,
      gap: theme.spacing.md
    },
    divisor: {
      display: 'none'
    },
    item: {
      fontSize: 16,
      padding: [theme.spacing.sm, theme.spacing.md]
    }
  },
  '@media (max-width: 480px)': {
    root: {
      padding: theme.spacing.sm,
      gap: theme.spacing.sm
    },
    item: {
      fontSize: 14,
      padding: [theme.spacing.xs, theme.spacing.sm]
    }
  }
});

export { styles };
