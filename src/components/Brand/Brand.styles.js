import theme from '../../settings/theme.js';

const styles = () => ({
  root: {
    position: 'relative',
    display: 'block',
    border: 'none',
    margin: 0,
    padding: 0,
    boxShadow: 'none',
    textShadow: 'none'
  },
  link: {
    border: 'none',
    outline: 'none',
    userSelect: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    transition: 'all 0.3s ease'
  },
  title: {
    position: 'absolute',
    left: 0,
    top: 0,
    visibility: 'hidden'
  },
  svg: {
    display: 'block',
    margin: 0,
    border: 'none',
    padding: 0,
    opacity: 0
  },
  'img': {
    filter: 'drop-shadow(0 0 80px rgba(218, 165, 32, 0.3)) drop-shadow(0 0 160px rgba(218, 165, 32, 0.2)) drop-shadow(0 0 240px rgba(218, 165, 32, 0.1))',
    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
    animation: 'logoFloat 6s ease-in-out infinite',
    transform: 'translateZ(0)',
    '&:hover': {
      filter: 'drop-shadow(0 0 100px rgba(218, 165, 32, 0.5)) drop-shadow(0 0 200px rgba(218, 165, 32, 0.3)) drop-shadow(0 0 300px rgba(218, 165, 32, 0.2))',
      transform: 'translateZ(0) scale(1.05)',
      animation: 'logoPulse 0.6s ease-in-out'
    }
  },
  path: {
    fill: 'none',
    strokeWidth: 16,
    stroke: theme.color.heading.main,
    transition: `stroke ${theme.animation.time}ms ease-out`
  },
  hover: {
    '&:hover': {
      '& $path': {
        stroke: theme.color.secondary.main
      },
      '& img': {
        filter: 'drop-shadow(0 0 100px rgba(218, 165, 32, 0.5)) drop-shadow(0 0 200px rgba(218, 165, 32, 0.3)) drop-shadow(0 0 300px rgba(218, 165, 32, 0.2))',
        transform: 'translateZ(0) scale(1.05)'
      }
    }
  }
});

// Add global styles for the enhanced animations
const globalStyles = `
  @keyframes logoFloat {
    0%, 100% {
      transform: translateZ(0) translateY(0px);
    }
    50% {
      transform: translateZ(0) translateY(-8px);
    }
  }

  @keyframes logoPulse {
    0% {
      transform: translateZ(0) scale(1.05);
    }
    50% {
      transform: translateZ(0) scale(1.1);
    }
    100% {
      transform: translateZ(0) scale(1.05);
    }
  }

  @keyframes logoGlow {
    0%, 100% {
      filter: drop-shadow(0 0 80px rgba(218, 165, 32, 0.3)) drop-shadow(0 0 160px rgba(218, 165, 32, 0.2)) drop-shadow(0 0 240px rgba(218, 165, 32, 0.1));
    }
    50% {
      filter: drop-shadow(0 0 100px rgba(218, 165, 32, 0.4)) drop-shadow(0 0 200px rgba(218, 165, 32, 0.25)) drop-shadow(0 0 300px rgba(218, 165, 32, 0.15));
    }
  }

  @keyframes logoShine {
    0% {
      background-position: -200% center;
    }
    100% {
      background-position: 200% center;
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
