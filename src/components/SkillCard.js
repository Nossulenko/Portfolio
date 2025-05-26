import React from 'react';
import PropTypes from 'prop-types';
import ProgressBar from './ProgressBar';

const cardStyle = {
  background: '#181A20',
  borderRadius: '10px',
  padding: '28px 28px 18px 28px',
  margin: '28px 0',
  color: '#fff',
  border: '1px solid #DAA520',
  boxShadow: '0 2px 8px #0008',
  minWidth: '300px',
  maxWidth: '100%',
  flex: 1
};

const highlight = {
  color: '#DAA520',
  fontWeight: 700,
  letterSpacing: 1,
  marginBottom: '16px',
  fontSize: '1.1rem',
  cursor: 'pointer',
  transition: 'text-shadow 0.2s',
  '&:hover': {
    textShadow: '0 0 5px #DAA520'
  }
};

const SkillCard = ({ title, skills }) => (
  <div style={cardStyle}>
    <h3 style={highlight}>{title}</h3>
    {skills.map(skill => (
      <div key={skill.name} style={{ marginBottom: '16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1rem', color: '#fff', fontWeight: 500 }}>
          <span>{skill.name}</span>
          <span style={highlight}>{skill.level}%</span>
        </div>
        <ProgressBar value={skill.level} />
      </div>
    ))}
  </div>
);

SkillCard.propTypes = {
  title: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    level: PropTypes.number.isRequired
  })).isRequired
};

export default SkillCard;
