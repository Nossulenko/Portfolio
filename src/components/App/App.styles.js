const styles = () => ({
  root: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    display: 'grid',
    gridTemplateRows: '1fr 115px',
    overflowX: 'hidden',
    overflowY: 'auto',
    width: '100%',
    height: '100%'
  }
});

export { styles };
