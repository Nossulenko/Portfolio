import React from 'react';
import PropTypes from 'prop-types';

const ProgressBar = ({ value }) => (
  <div style={{
    background: '#23242B',
    borderRadius: '4px',
    height: '8px',
    width: '100%',
    marginTop: '4px',
    marginBottom: '2px',
    overflow: 'hidden'
  }}>
    <div style={{
      width: `${value}%`,
      height: '100%',
      background: 'linear-gradient(90deg, #F6A700 60%, #FFB347 100%)',
      borderRadius: '4px',
      transition: 'width 0.5s'
    }} />
  </div>
);

ProgressBar.propTypes = {
  value: PropTypes.number.isRequired
};

export default ProgressBar;
