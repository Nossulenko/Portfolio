import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const MouseGlow = ({ color = 'rgba(218, 165, 32, 0.1)', size = 300 }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const onMove = (event) => {
      const x = event.clientX || (event.touches && event.touches[0]?.clientX);
      const y = event.clientY || (event.touches && event.touches[0]?.clientY);

      if (x !== undefined && y !== undefined) {
        element.style.opacity = '1';
        element.style.transform = `translate(calc(${x}px - 50%), calc(${y}px - 50%))`;
      }
    };

    const onHide = () => {
      element.style.opacity = '0';
    };

    // Desktop events
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onHide);

    // Mobile touch events
    document.addEventListener('touchmove', onMove, { passive: true });
    document.addEventListener('touchstart', onMove, { passive: true });
    document.addEventListener('touchend', onHide);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onHide);
      document.removeEventListener('touchmove', onMove);
      document.removeEventListener('touchstart', onMove);
      document.removeEventListener('touchend', onHide);
    };
  }, []);

  return (
    <div
      ref={elementRef}
      style={{
        position: 'fixed',
        width: size,
        height: size,
        transition: 'opacity 200ms ease-out',
        opacity: 0,
        pointerEvents: 'none',
        borderRadius: '50%',
        background: `radial-gradient(${color} 0%, transparent 70%)`,
        zIndex: 9999,
        top: 0,
        left: 0
      }}
    />
  );
};

MouseGlow.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number
};

export default MouseGlow;
