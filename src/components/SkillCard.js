import React from 'react';
import PropTypes from 'prop-types';
import ProgressBar from './ProgressBar';

const SkillCard = ({ title, skills }) => (
  <div style={{
    background: '#181A20',
    borderRadius: '8px',
    padding: '24px',
    margin: '12px',
    minWidth: '300px',
    color: '#F6A700',
    boxShadow: '0 2px 8px #0008',
    flex: 1
  }}>
    <h3 style={{ color: '#F6A700', marginBottom: '16px', fontWeight: 600 }}>{title}</h3>
    {skills.map(skill => (
      <div key={skill.name} style={{ marginBottom: '12px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1rem', color: '#fff' }}>
          <span>{skill.name}</span>
          <span style={{ color: '#F6A700' }}>{skill.level}%</span>
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
