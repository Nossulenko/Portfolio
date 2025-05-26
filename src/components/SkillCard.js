import React from 'react';
import PropTypes from 'prop-types';
import ProgressBar from './ProgressBar';

const highlight = {
  color: '#DAA520',
  fontWeight: 600,
  cursor: 'pointer',
  transition: 'text-shadow 0.2s',
  '&:hover': {
    textShadow: '0 0 5px #DAA520'
  }
};

const SkillCard = ({ title, skills }) => (
  <div style={{
    background: '#181A20',
    borderRadius: '8px',
    padding: '24px',
    margin: '12px',
    minWidth: '300px',
    color: '#3366FF',
    boxShadow: '0 2px 8px #0008',
    flex: 1
  }}>
    <h3
      style={{ ...highlight, marginBottom: '16px' }}
    >{title}</h3>
    {skills.map(skill => (
      <div key={skill.name} style={{ marginBottom: '12px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1rem', color: '#fff' }}>
          <span>{skill.name}</span>
          <span
            style={highlight}
          >{skill.level}%</span>
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
