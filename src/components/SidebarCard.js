import React from 'react';
import PropTypes from 'prop-types';

// HUD panel styled after the starmap object-info panel: clipped corners,
// thin line border, gold accent edge.
const SidebarCard = ({ title, children }) => (
  <div style={{
    background: 'rgba(2, 6, 16, 0.82)',
    border: '1px solid #1E3A5F',
    borderRight: '3px solid #DAA520',
    padding: '20px 22px',
    marginBottom: '20px',
    color: '#C6DFF5',
    minWidth: '260px',
    maxWidth: '320px',
    position: 'relative',
    overflow: 'hidden',
    transition: 'border-color 0.25s ease'
  }}>
    <h4
      style={{
        color: '#FFC94D',
        margin: '0 0 4px',
        fontFamily: 'Electrolize, sans-serif',
        fontWeight: 700,
        fontSize: '0.85rem',
        letterSpacing: 4,
        textTransform: 'uppercase',
        position: 'relative',
        zIndex: 1
      }}
    >◈ {title}</h4>
    <div
      style={{
        height: 1,
        margin: '10px 0 14px',
        background: 'linear-gradient(90deg, rgba(218, 165, 32, 0.65), transparent)'
      }}
    />
    <div style={{ position: 'relative', zIndex: 1 }}>
      {children}
    </div>
  </div>
);

SidebarCard.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default SidebarCard;
