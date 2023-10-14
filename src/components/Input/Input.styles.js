const styles = () => ({
  rootInput: {
    background: 'transparent',
    border: 'none',
    outline: 'none',
    color: '#D3D3D3',
    fontSize: '18px'
  },
  wrapper: {
    border: '2px solid #225015',
    borderRadius: '12px',
    padding: '8px 12px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'text'
  },
  icon: {
    width: 20,
    height: 20
  },
  title: {
    marginBottom: 4,
    fontWeight: 600
  },

  '@media screen and (max-width: 641px)': {
    rootInput: {
      fontSize: '16px'
    }
  },
  '@media screen and (max-width: 360px)': {
    rootInput: {
      fontSize: '14px',
      maxWidth: 'fit-content'
    }
  }
});

export { styles };
