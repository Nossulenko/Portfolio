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

const SkillsPage = () => (
  <Main>
    <h2 style={highlight}>| CORE SKILLS</h2>
    <div className='core-skills-section' style={{ maxWidth: 800, margin: '0 auto', color: '#fff', fontSize: '1.13rem', lineHeight: 1.7 }}>
      <div style={{ marginBottom: 22 }}>
        <div style={{ fontWeight: 700, fontSize: '1.13em', marginBottom: 2, color: '#DAA520' }}>Product Leadership & Strategy</div>
        <div>Digital Product Management, Roadmap Definition, KPI Setting, Go-to-Market Planning</div>
      </div>
      <div style={{ marginBottom: 22 }}>
        <div style={{ fontWeight: 700, fontSize: '1.13em', marginBottom: 2, color: '#DAA520' }}>Fractional & Interim CTO Expertise</div>
        <div>Technical Strategy, Governance, Architecture Oversight, Executive Reporting</div>
      </div>
      <div style={{ marginBottom: 22 }}>
        <div style={{ fontWeight: 700, fontSize: '1.13em', marginBottom: 2, color: '#DAA520' }}>AI & Automation Integration</div>
        <div>LLMs, Workflow Automation, Custom AI Agents, AI-Assisted SDLC</div>
      </div>
      <div style={{ marginBottom: 22 }}>
        <div style={{ fontWeight: 700, fontSize: '1.13em', marginBottom: 2, color: '#DAA520' }}>Agile Transformation & Team Leadership</div>
        <div>Agile/Scrum Leadership, Cross-Functional Team Management, Remote/Offshore Teams</div>
      </div>
      <div style={{ marginBottom: 22 }}>
        <div style={{ fontWeight: 700, fontSize: '1.13em', marginBottom: 2, color: '#DAA520' }}>Operational Excellence</div>
        <div>FinOps, Cost Optimization, Cloud Infrastructure (AWS Lambda, S3, CloudWatch, Textract)</div>
      </div>
      <div style={{ marginBottom: 22 }}>
        <div style={{ fontWeight: 700, fontSize: '1.13em', marginBottom: 2, color: '#DAA520' }}>Quality & Delivery Management</div>
        <div>QA/QC Management, Release Management, Requirements Traceability</div>
      </div>
      <div style={{ marginBottom: 22 }}>
        <div style={{ fontWeight: 700, fontSize: '1.13em', marginBottom: 2, color: '#DAA520' }}>FullStack Execution & Product Development</div>
        <div>React, Angular, Next.js, Node.js, and modern web stacks — skilled in taking products from low-fidelity prototypes to validated MVPs, translating business requirements into scalable, production-ready solutions.</div>
      </div>
    </div>
  </Main>
);

export default SkillsPage;
