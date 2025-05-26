import React from 'react';
import PropTypes from 'prop-types';

const SidebarCard = ({ title, children }) => (
  <div style={{
    background: '#181A20',
    borderRadius: '10px',
    padding: '20px',
    marginBottom: '20px',
    color: '#fff',
    boxShadow: '0 2px 8px #0008',
    minWidth: '260px',
    maxWidth: '320px'
  }}>
    <h4
      style={{
        color: '#DAA520',
        marginBottom: '14px',
        fontWeight: 600,
        letterSpacing: 1,
        transition: 'text-shadow 0.2s',
        cursor: 'pointer',
        '&:hover': {
          textShadow: '0 0 5px #DAA520'
        }
      }}
    >{title}</h4>
    {children}
  </div>
);

SidebarCard.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default SidebarCard;
