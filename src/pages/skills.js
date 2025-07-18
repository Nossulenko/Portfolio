import React from 'react';
import { Main } from '../components/Main';
import './styles/skills.css';

const highlight = {
  color: '#DAA520',
  fontWeight: 700,
  letterSpacing: 2,
  cursor: 'pointer',
  transition: 'text-shadow 0.2s',
  '&:hover': {
    textShadow: '0 0 5px #DAA520'
  }
};

const coreSkills = [
  {
    title: 'Product Leadership & Strategy',
    description: 'Digital Product Management, Roadmap Definition, KPI Setting, Go-to-Market Planning'
  },
  {
    title: 'Fractional & Interim CTO Expertise',
    description: 'Technical Strategy, Governance, Architecture Oversight, Executive Reporting'
  },
  {
    title: 'AI & Automation Integration',
    description: 'LLMs, Workflow Automation, Custom AI Agents, AI-Assisted SDLC'
  },
  {
    title: 'Agile Transformation & Team Leadership',
    description: 'Agile/Scrum Leadership, Cross-Functional Team Management, Remote/Offshore Teams'
  },
  {
    title: 'Operational Excellence',
    description: 'FinOps, Cost Optimization, Cloud Infrastructure (AWS Lambda, S3, CloudWatch, Textract)'
  },
  {
    title: 'Quality & Delivery Management',
    description: 'QA/QC Management, Release Management, Requirements Traceability'
  },
  {
    title: 'FullStack Execution & Product Development',
    description: 'React, Angular, Next.js, Node.js, and modern web stacks — skilled in taking products from low-fidelity prototypes to validated MVPs, translating business requirements into scalable, production-ready solutions.'
  }
];

const SkillsPage = () => (
  <Main>
    <h2 style={highlight}>| CORE SKILLS</h2>

    {/* Core Skills Card */}
    <div className='core-skills-card'>
      {coreSkills.map((skill, index) => (
        <div key={index} className='skill-item'>
          <h3 className='skill-title'>{skill.title}</h3>
          <p className='skill-description'>{skill.description}</p>
        </div>
      ))}
    </div>
  </Main>
);

export default SkillsPage;
