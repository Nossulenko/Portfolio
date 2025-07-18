import React from 'react';
import PropTypes from 'prop-types';

const SidebarCard = ({ title, children }) => (
  <div style={{
    background: 'rgba(24, 26, 32, 0.15)',
    backdropFilter: 'blur(20px) saturate(180%)',
    WebkitBackdropFilter: 'blur(20px) saturate(180%)',
    borderRadius: '16px',
    padding: '20px',
    marginBottom: '20px',
    color: '#e0e0e0',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
    minWidth: '260px',
    maxWidth: '320px',
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.3s ease'
  }}>
    {/* Glass overlay */}
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(135deg, rgba(218, 165, 32, 0.08) 0%, rgba(218, 165, 32, 0.03) 50%, rgba(255, 255, 255, 0.02) 100%)',
      borderRadius: '16px',
      pointerEvents: 'none',
      zIndex: -1
    }} />

    <h4
      style={{
        color: '#DAA520',
        marginBottom: '14px',
        fontWeight: 600,
        letterSpacing: 1,
        transition: 'text-shadow 0.2s',
        cursor: 'pointer',
        position: 'relative',
        zIndex: 1
      }}
    >{title}</h4>
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
