import React from 'react';
import SkillCard from '../components/SkillCard';
import { Main } from '../components/Main';

const skillsData = [
  {
    title: 'FRONTEND DEVELOPMENT',
    skills: [
      { name: 'React/Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'TailwindCSS', level: 85 },
      { name: 'Angular', level: 75 },
      { name: 'Vue.js', level: 65 },
    ]
  },
  {
    title: 'BACKEND DEVELOPMENT',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Express', level: 85 },
      { name: 'NestJS', level: 80 },
      { name: 'GraphQL', level: 75 },
      { name: 'Python/Django', level: 65 },
    ]
  },
  {
    title: 'DATABASE & CLOUD',
    skills: [
      { name: 'PostgreSQL', level: 90 },
      { name: 'MongoDB', level: 85 },
      { name: 'AWS', level: 80 },
      { name: 'Firebase', level: 75 },
      { name: 'Kubernetes', level: 70 },
    ]
  },
  {
    title: 'TECHNICAL LEADERSHIP',
    skills: [
      { name: 'Team Management', level: 95 },
      { name: 'Agile Methodology', level: 90 },
      { name: 'System Architecture', level: 85 },
      { name: 'Code Reviews', level: 90 },
      { name: 'Technical Mentoring', level: 95 },
    ]
  }
];

const projects = [
  {
    title: 'ENTERPRISE SAAS PLATFORM',
    description: 'Led the architecture and development of a comprehensive SaaS platform for enterprise resource management. Implemented microservices architecture with Node.js, React, and PostgreSQL. Achieved 40% improvement in system performance and 99.9% uptime.'
  },
  {
    title: 'FINTECH PAYMENT SOLUTION',
    description: 'Designed and developed a secure payment processing system with real-time transaction monitoring. Utilized TypeScript, NestJS, and MongoDB. Implemented OAuth 2.0 and achieved PCI DSS compliance. Processed over $2M in transactions monthly.'
  },
  {
    title: 'E-COMMERCE PLATFORM MIGRATION',
    description: 'Successfully migrated a legacy e-commerce system to a modern stack with Next.js, GraphQL, and AWS. Implemented CI/CD pipelines with GitHub Actions. Reduced page load times by 65% and increased conversion rates by 23%.'
  },
  {
    title: 'TEAM LEADERSHIP & MENTORING',
    description: 'Managed cross-functional teams of up to 12 developers. Implemented Agile methodologies and established code quality standards. Mentored junior developers and conducted knowledge-sharing sessions on modern web technologies.'
  }
];

const cardGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '32px',
  margin: '32px 0',
};

const projectCardStyle = {
  background: '#23242B',
  borderRadius: '8px',
  padding: '20px',
  margin: '16px 0',
  color: '#fff',
  borderLeft: '4px solid #F6A700',
  boxShadow: '0 2px 8px #0008',
};

const SkillsPage = () => (
  <Main>
    <h2 style={{ color: '#F6A700', letterSpacing: 2, marginTop: 0 }}>| SKILLS</h2>
    <div style={cardGridStyle}>
      {skillsData.map(card => (
        <SkillCard key={card.title} title={card.title} skills={card.skills} />
      ))}
    </div>
    <h2 style={{ color: '#F6A700', letterSpacing: 2, marginTop: 40 }}>| PROJECT EXPERIENCE</h2>
    {projects.map(project => (
      <div key={project.title} style={projectCardStyle}>
        <h3 style={{ color: '#F6A700', marginBottom: 8, fontWeight: 600 }}>{project.title}</h3>
        <p style={{ color: '#fff', margin: 0 }}>{project.description}</p>
      </div>
    ))}
  </Main>
);

export default SkillsPage;
