import React from 'react';
import SkillCard from '../components/SkillCard';
import { Main } from '../components/Main';

const skillsData = [
  {
    title: 'FRONTEND DEVELOPMENT',
    skills: [
      { name: 'React/Next.js', level: 95 },
      { name: 'Angular', level: 90 },
      { name: 'TypeScript', level: 90 },
      { name: 'Vue.js', level: 85 },
      { name: 'TailwindCSS', level: 85 },
      { name: 'Flutter', level: 70 },
      { name: 'ngrx', level: 65 }
    ]
  },
  {
    title: 'BACKEND DEVELOPMENT',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Java Spring', level: 85 },
      { name: 'Express', level: 85 },
      { name: 'NestJS', level: 80 },
      { name: 'Laravel', level: 75 },
      { name: 'REST APIs', level: 95 },
      { name: 'GraphQL', level: 77 }
    ]
  },
  {
    title: 'AI TOOLS & PLATFORMS',
    skills: [
      { name: 'AWS Bedrock', level: 80 },
      { name: 'AWS SageMaker', level: 80 },
      { name: 'Cursor', level: 90 },
      { name: 'V0 (Vercel)', level: 90 },
      { name: 'OpenAI', level: 90 },
      { name: 'n8n', level: 75 },
      { name: 'Pinecone', level: 75 },
      { name: 'Supermemory', level: 60 }
    ]
  },
  {
    title: 'DATABASE & CLOUD',
    skills: [
      { name: 'PostgreSQL', level: 90 },
      { name: 'MongoDB', level: 85 },
      { name: 'MySQL', level: 80 },
      { name: 'AWS', level: 80 },
      { name: 'Azure', level: 80 },
      { name: 'Firebase', level: 75 },
      { name: 'Vercel', level: 65 }
    ]
  },
  {
    title: 'TECHNICAL LEADERSHIP',
    skills: [
      // Product Manager Responsibilities
      { name: 'Product Roadmapping & Vision', level: 90 },
      { name: 'Backlog Prioritization & Grooming', level: 88 },
      { name: 'User Research & Feedback Loops', level: 85 },
      { name: 'Go-to-Market Strategy & Launch Planning', level: 87 },
      { name: 'OKR Definition & Tracking', level: 86 },

      // CTO Responsibilities
      { name: 'Technology Strategy & Roadmap', level: 92 },
      { name: 'Enterprise Architecture & Scalability', level: 90 },
      { name: 'Budgeting & P&L Oversight', level: 88 },
      { name: 'Talent Acquisition & Org Design', level: 89 },
      { name: 'Vendor / Partner Management', level: 85 },
      { name: 'Innovation & R&D Oversight', level: 87 },
      { name: 'Security & Compliance Governance', level: 86 }
    ]
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
  borderLeft: '4px solid #3366FF',
  boxShadow: '0 2px 8px #0008',
};

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

const projectTitleStyle = {
  color: '#DAA520',
  marginBottom: 8,
  fontWeight: 600,
  cursor: 'pointer',
  transition: 'text-shadow 0.2s',
  '&:hover': {
    textShadow: '0 0 5px #DAA520'
  }
};

const SkillsPage = () => (
  <Main>
    <h2 style={highlight}>| SKILLS</h2>
    <div style={cardGridStyle}>
      {skillsData.map(card => (
        <SkillCard key={card.title} title={card.title} skills={card.skills} />
      ))}
    </div>
  </Main>
);

export default SkillsPage;
