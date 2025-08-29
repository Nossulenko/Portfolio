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
    userSelect: 'none'
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
    transition: 'filter 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
    animation: 'heartbeat 3s ease-in-out infinite',
    '&:hover': {
      filter: 'drop-shadow(0 0 100px rgba(218, 165, 32, 0.4)) drop-shadow(0 0 200px rgba(218, 165, 32, 0.25)) drop-shadow(0 0 300px rgba(218, 165, 32, 0.15))'
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
        filter: 'drop-shadow(0 0 100px rgba(218, 165, 32, 0.4)) drop-shadow(0 0 200px rgba(218, 165, 32, 0.25)) drop-shadow(0 0 300px rgba(218, 165, 32, 0.15))'
      }
    }
  }
});

// Add global styles for the animation
const globalStyles = `
  @keyframes heartbeat {
    0% {
      filter: drop-shadow(0 0 80px rgba(218, 165, 32, 0.3)) drop-shadow(0 0 160px rgba(218, 165, 32, 0.2)) drop-shadow(0 0 240px rgba(218, 165, 32, 0.1));
    }
    14% {
      filter: drop-shadow(0 0 100px rgba(218, 165, 32, 0.5)) drop-shadow(0 0 200px rgba(218, 165, 32, 0.3)) drop-shadow(0 0 300px rgba(218, 165, 32, 0.2));
    }
    28% {
      filter: drop-shadow(0 0 80px rgba(218, 165, 32, 0.3)) drop-shadow(0 0 160px rgba(218, 165, 32, 0.2)) drop-shadow(0 0 240px rgba(218, 165, 32, 0.1));
    }
    42% {
      filter: drop-shadow(0 0 100px rgba(218, 165, 32, 0.5)) drop-shadow(0 0 200px rgba(218, 165, 32, 0.3)) drop-shadow(0 0 300px rgba(218, 165, 32, 0.2));
    }
    70% {
      filter: drop-shadow(0 0 80px rgba(218, 165, 32, 0.3)) drop-shadow(0 0 160px rgba(218, 165, 32, 0.2)) drop-shadow(0 0 240px rgba(218, 165, 32, 0.1));
    }
    100% {
      filter: drop-shadow(0 0 80px rgba(218, 165, 32, 0.3)) drop-shadow(0 0 160px rgba(218, 165, 32, 0.2)) drop-shadow(0 0 240px rgba(218, 165, 32, 0.1));
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
