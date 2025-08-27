import theme from '../../settings/theme.js';

const styles = () => ({
  root: {
    position: 'relative',
    borderRadius: theme.borderRadius.lg,
    transition: 'all 0.3s ease',
    overflow: 'hidden'
  },

  // Variants
  default: {
    background: theme.color.background.card,
    border: `1px solid rgba(255, 255, 255, 0.1)`,
    boxShadow: theme.shadows.sm
  },

  elevated: {
    background: theme.color.background.card,
    border: `1px solid rgba(255, 255, 255, 0.1)`,
    boxShadow: theme.shadows.lg,
    '&:hover': {
      boxShadow: theme.shadows.xl,
      transform: 'translateY(-4px)'
    }
  },

  glass: {
    background: theme.color.background.glass,
    backdropFilter: 'blur(20px) saturate(180%)',
    WebkitBackdropFilter: 'blur(20px) saturate(180%)',
    border: `1px solid rgba(218, 165, 32, 0.2)`,
    boxShadow: theme.shadows.md
  },

  outlined: {
    background: 'transparent',
    border: `2px solid ${theme.color.secondary.main}`,
    boxShadow: 'none',
    '&:hover': {
      background: 'rgba(218, 165, 32, 0.05)',
      boxShadow: theme.shadows.glow
    }
  },

  // Padding variants
  paddingNone: {
    padding: 0
  },

  paddingSm: {
    padding: theme.spacing.sm
  },

  paddingMd: {
    padding: theme.spacing.md
  },

  paddingLg: {
    padding: theme.spacing.lg
  },

  paddingXl: {
    padding: theme.spacing.xl
  },

  // Interactive state
  interactive: {
    cursor: 'pointer',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: theme.shadows.lg
    },
    '&:active': {
      transform: 'translateY(0px)'
    }
  },

  // Responsive adjustments
  '@media (max-width: 768px)': {
    root: {
      borderRadius: theme.borderRadius.md
    },
    paddingMd: {
      padding: theme.spacing.sm
    },
    paddingLg: {
      padding: theme.spacing.md
    },
    paddingXl: {
      padding: theme.spacing.lg
    }
  }
});

export { styles };
