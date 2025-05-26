import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ProgressBar = ({ value }) => {
  const [hover, setHover] = useState(false);
  const [electricEffect, setElectricEffect] = useState(0);

  useEffect(() => {
    let animationFrame;
    let lastTime = 0;
    const animate = (time) => {
      if (time - lastTime > 16) { // 60fps animation
        setElectricEffect(prev => (prev + 0.5) % 100); // Smaller steps for smoother movement
        lastTime = time;
      }
      animationFrame = requestAnimationFrame(animate);
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const electricGradient = `linear-gradient(
    90deg,
    #0000FF 0%,
    #3366FF ${electricEffect}%,
    #0000FF ${(electricEffect + 5) % 110}%,
    #3366FF ${(electricEffect + 15) % 110}%,    #3366FF 110%
  )`;

  const badgeStyle = {
    display: 'inline-block',
    background: '#DAA520', // or your chosen yellow/orange
    color: '#181A20',      // dark text for contrast
    borderRadius: '16px',
    padding: '4px 14px',
    margin: '4px 6px 0 0',
    fontSize: '0.98em',
    fontWeight: 600,
    letterSpacing: 0.2,
    verticalAlign: 'middle',
    boxShadow: '0 1px 4px #0002',
    border: '1px solid #DAA520',
    transition: 'background 0.2s'
  };

  return (
    <div
      style={{
        background: '#23242B',
        borderRadius: '4px',
        height: '8px',
        width: '100%',
        marginTop: '4px',
        marginBottom: '2px',
        overflow: 'hidden',
        position: 'relative'
      }}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <div
        style={{
          width: `${value}%`,
          height: '100%',
          background: electricGradient,
          borderRadius: '4px',
          transition: 'width 0.5s',
          boxShadow: hover
            ? '0 0 8px #0000FF, 0 0 12px #3366FF, 0 0 16px #0000FF'
            : '0 0 4px #0000FF, 0 0 8px #3366FF',
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
            animation: 'electric-shine 1.2s linear infinite'
          }
        }}
      />
      <style>
        {`
          @keyframes electric-shine {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        `}
      </style>
    </div>
  );
};

ProgressBar.propTypes = {
  value: PropTypes.number.isRequired
};

export default ProgressBar;
