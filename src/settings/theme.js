const theme = {
  typography: {
    primary: 'Orbitron, sans-serif',
    secondary: 'Electrolize, sans-serif',
    body: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
    xxxl: '64px'
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    xxl: '24px'
  },
  shadows: {
    sm: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
    md: '0 4px 6px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.12)',
    lg: '0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)',
    xl: '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)',
    glow: '0 0 20px rgba(218, 165, 32, 0.3), 0 0 40px rgba(218, 165, 32, 0.2)'
  },
  color: {
    accent: 0.2,
    alpha: 0.5,
    primary: {
      dark: '#bbbbbb',
      main: '#eeeeee',
      light: '#ffffff'
    },
    secondary: {
      dark: '#B8860B',
      main: '#DAA520',
      light: '#F4A460'
    },
    tertiary: {
      dark: '#1a1a2e',
      main: '#16213e',
      light: '#0f3460'
    },
    heading: {
      main: '#ffffff',
      secondary: '#DAA520'
    },
    text: {
      main: '#e0e0e0',
      secondary: '#b0b0b0',
      muted: '#888888'
    },
    link: {
      dark: '#B8860B',
      main: '#DAA520',
      light: '#F4A460',
      hover: '#FFD700'
    },
    background: {
      dark: '#0a0a0a',
      main: '#181A20',
      light: '#1e1e2e',
      card: 'rgba(24, 26, 32, 0.8)',
      glass: 'rgba(24, 26, 32, 0.15)'
    },
    success: '#4CAF50',
    warning: '#FF9800',
    error: '#F44336',
    info: '#2196F3'
  },
  animation: {
    time: 250,
    stagger: 50,
    easing: {
      ease: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)'
    }
  },
  breakpoints: {
    xs: '480px',
    sm: '768px',
    md: '1024px',
    lg: '1200px',
    xl: '1440px'
  }
};

export default theme;
