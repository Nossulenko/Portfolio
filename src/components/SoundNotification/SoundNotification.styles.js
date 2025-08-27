import theme from '../../settings/theme.js';

const styles = () => ({
  root: {
    position: 'fixed',
    top: '24px',
    right: '24px',
    zIndex: 1000,
    maxWidth: '400px',
    animation: 'slideInRight 0.5s ease-out'
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing.md,
    padding: theme.spacing.md,
    background: theme.color.background.glass,
    backdropFilter: 'blur(20px) saturate(180%)',
    WebkitBackdropFilter: 'blur(20px) saturate(180%)',
    borderRadius: theme.borderRadius.xl,
    border: `1px solid rgba(218, 165, 32, 0.2)`,
    boxShadow: theme.shadows.lg,
    transition: 'all 0.3s ease',
    '&:hover': {
      borderColor: 'rgba(218, 165, 32, 0.3)',
      boxShadow: theme.shadows.xl,
      transform: 'translateY(-2px)'
    }
  },
  icon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: 'rgba(218, 165, 32, 0.1)',
    color: theme.color.secondary.main,
    flexShrink: 0
  },
  svg: {
    width: '24px',
    height: '24px'
  },
  content: {
    flex: 1,
    minWidth: 0
  },
  title: {
    fontSize: '16px',
    fontWeight: 600,
    color: theme.color.text.main,
    marginBottom: '4px',
    lineHeight: 1.2
  },
  description: {
    fontSize: '14px',
    color: theme.color.text.secondary,
    lineHeight: 1.3
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing.sm,
    flexShrink: 0
  },
  muteButton: {
    padding: `${theme.spacing.sm} ${theme.spacing.md}`,
    background: theme.color.secondary.main,
    color: theme.color.background.dark,
    border: 'none',
    borderRadius: theme.borderRadius.md,
    fontSize: '12px',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    '&:hover': {
      background: theme.color.secondary.light,
      transform: 'translateY(-1px)',
      boxShadow: theme.shadows.md
    },
    '&:active': {
      transform: 'translateY(0px)'
    }
  },
  closeButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '28px',
    height: '28px',
    background: 'rgba(255, 255, 255, 0.1)',
    color: theme.color.text.secondary,
    border: 'none',
    borderRadius: '50%',
    fontSize: '18px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    '&:hover': {
      background: 'rgba(255, 255, 255, 0.2)',
      color: theme.color.text.main,
      transform: 'scale(1.1)'
    }
  },
  '@media (max-width: 768px)': {
    root: {
      top: '16px',
      right: '16px',
      left: '16px',
      maxWidth: 'none'
    },
    container: {
      padding: theme.spacing.sm,
      gap: theme.spacing.sm
    },
    icon: {
      width: '32px',
      height: '32px'
    },
    svg: {
      width: '20px',
      height: '20px'
    },
    title: {
      fontSize: '14px'
    },
    description: {
      fontSize: '12px'
    },
    muteButton: {
      padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
      fontSize: '11px'
    },
    closeButton: {
      width: '24px',
      height: '24px',
      fontSize: '16px'
    }
  },
  '@media (max-width: 480px)': {
    root: {
      top: '12px',
      right: '12px',
      left: '12px'
    },
    container: {
      padding: '12px',
      gap: '8px'
    },
    icon: {
      width: '28px',
      height: '28px'
    },
    svg: {
      width: '18px',
      height: '18px'
    }
  }
});

// Add global styles for animations
const globalStyles = `
  @keyframes slideInRight {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slideOutRight {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }
`;

// Inject global styles
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = globalStyles;
  document.head.appendChild(style);
}

export { styles };
