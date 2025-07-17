const styles = () => ({
  root: {
    position: 'relative',
    display: 'block',
    margin: [0, 'auto', 10],
    width: '100%'
  },
  svg: {
    display: 'block',
    position: 'absolute',
    left: 0,
    top: 0
  },
  path: {
    opacity: ({ energy }) => energy.animate ? 0 : 1
  },
  content: {
    position: 'relative',
    zIndex: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: [0, 'auto'],
    padding: [20, 20, 20],
    width: '100%',
    maxWidth: 1000,
    minHeight: 80
  },
  brand: {
    margin: [0, 'auto', 0],
    width: '100%',
    maxWidth: 300,
    textAlign: 'center',
    transform: 'translateY(-6px)'
  },

  menu: {
    width: '100%'
  },
  burgerIcon: {
    position: 'absolute',
    left: 20,
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  },

  '@media screen and (min-width: 768px)': {
    root: {
      marginBottom: 20
    },
    content: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: [20, 20, 20],
      gap: '40px'
    },
    brand: {
      margin: 0
    },
    menu: {
      margin: 0,
      maxWidth: 300
    },
    burgerIcon: {
      display: 'none'
    }
  },

  '@media screen and (min-width: 1025px)': {
    menu: {
      margin: 0,
      width: 350,
      maxWidth: 'none'
    }
  }
});

export { styles };
