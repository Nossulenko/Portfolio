import React from 'react';
import { Main } from '../components/Main';
import SidebarCard from '../components/SidebarCard';
import './styles/about.css';

const containerStyle = {
  display: 'flex',
  flexDirection: 'row',
  gap: 56,
  maxWidth: 1200,
  margin: '0 auto',
  padding: '0 20px',
  '@media (max-width: 768px)': {
    flexDirection: 'column',
    gap: 32,
    padding: '0 16px'
  }
};

const mainStyle = {
  flex: 1,
  maxWidth: 'calc(100% - 300px)',
  '@media (max-width: 768px)': {
    maxWidth: '100%'
  },
  color: '#fff'
};

const highlight = {
  color: '#DAA520',
  fontWeight: 700,
  letterSpacing: 2,
  cursor: 'pointer'
};

const employmentCardStyle = {
  background: '#181A20',
  borderRadius: '10px',
  padding: '28px 28px 18px 28px',
  margin: '28px 0',
  color: '#fff',
  border: '1px solid #DAA520',
  boxShadow: '0 2px 8px #0008',
  maxWidth: 900,
  '@media (max-width: 768px)': {
    padding: '20px 16px 16px 16px',
    margin: '20px 0'
  }
};

const employmentTitleStyle = {
  color: '#DAA520',
  fontWeight: 700,
  fontSize: '1.3rem',
  marginBottom: 2,
  letterSpacing: 0.2,
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  '@media (max-width: 768px)': {
    fontSize: '1.1rem'
  }
};

const employmentMetaStyle = {
  color: '#fff',
  fontWeight: 500,
  fontSize: '1.05rem',
  marginBottom: 2,
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  '@media (max-width: 768px)': {
    fontSize: '0.95rem',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 4
  }
};

const employmentPeriodStyle = {
  color: '#fff',
  fontWeight: 400,
  fontSize: '1.05rem',
  marginLeft: 8,
  '@media (max-width: 768px)': {
    marginLeft: 0,
    fontSize: '0.95rem'
  }
};

const employmentLocationStyle = {
  color: '#888',
  fontWeight: 400,
  fontSize: '1rem',
  marginBottom: 10,
  '@media (max-width: 768px)': {
    fontSize: '0.9rem'
  }
};

const employmentDescriptionStyle = {
  margin: '16px 0 0 0',
  color: '#fff',
  fontSize: '1.08rem',
  lineHeight: 1.6,
  fontWeight: 500,
  '@media (max-width: 768px)': {
    fontSize: '0.95rem',
    lineHeight: 1.5
  }
};

const badgeStyle = {
  display: 'inline-block',
  background: '#DAA520',
  color: '#181A20',
  borderRadius: '16px',
  padding: '4px 14px',
  margin: '8px 8px 0 0',
  fontSize: '0.98em',
  fontWeight: 700,
  letterSpacing: 0.2,
  verticalAlign: 'middle',
  boxShadow: '0 1px 4px #0002',
  border: '1px solid #DAA520',
  transition: 'background 0.2s',
  '@media (max-width: 768px)': {
    fontSize: '0.9em',
    padding: '3px 12px',
    margin: '6px 6px 0 0'
  }
};

const sidebarStyle = {
  width: 300,
  '@media (max-width: 768px)': {
    width: '100%'
  },
  display: 'flex',
  flexDirection: 'column'
};

const valueStyle = { color: '#fff', fontWeight: 400 };
const labelStyle = {
  color: '#DAA520',
  fontWeight: 500,
  marginRight: 8,
  display: 'inline-block'
};
const nativeStyle = {
  color: '#DAA520',
  marginLeft: 8,
  fontSize: '0.95em'
};

const employmentHistory = [
  {
    title: 'Lead Engineer | Product manager',
    company: <a href="https://docbyte.com/" target="_blank" rel="noopener noreferrer">Docbyte</a>,
    period: 'Jun 2024 — May 2025',
    location: 'Gent',
    description: (
      <ul style={{ margin: 0, paddingLeft: 24 }}>
        <li>Directed technical strategy and product delivery for Europe’s only Qualified Trust Service Provider (QTSP), ensuring compliance with EU trust and identity standards in a highly regulated SaaS environment.</li>
        <li>Pioneered AI-driven automation and cloud monitoring systems using AWS CloudWatch, slashing issue resolution times for customer support teams by enhancing real-time infrastructure visibility.</li>
        <li>Led cross-functional teams to launch new cloud-native SaaS products from concept to market, integrating secure system design and audit-ready processes for ISO 27001 certification.</li>
        <li>Contributed to executive decision-making in management meetings, aligning technology roadmaps with long-term business objectives for measurable impact.</li>
      </ul>
    ),
    badges: [
      'Agile Leadership',
      'Product Management',
      'Technical Strategy',
      'ISO 27001',
      'AWS CloudWatch',
      'AWS SageMaker',
      'AWS Bedrock',
      'AI Integration',
      'Claude',
      'OpenAI',
      'Vector Databases (FAISS, Pinecone)',
      'Docker',
      'QA/QC',
      'GitHub',
      'Jira',
      'REST APIs'
    ]
  },
  {
    title: 'Management Partner | Product Manager',
    company: <a href="https://www.productarchitects.eu/" target="_blank" rel="noopener noreferrer">The Product Architects</a>,
    period: 'Aug 2023 — Jun 2024',
    location: 'Antwerp',
    description: (
      <ul style={{ margin: 0, paddingLeft: 24 }}>
        <li>Spearheaded development of earlystage MVPs with a UKbased engineering team, managing the full product lifecycle from ideation through technical handover, including infrastructure design, cloud architecture, and integration of AI-driven features to accelerate market differentiation.</li>
        <li>Ensured highquality, ontime releases by aligning crossfunctional efforts, leveraging AI-assisted workflows, scalable backend design, and modern DevOps practices to optimize UX iterations and delivery sprints.</li>
        <li>Bridged business goals with technical execution, delivering productionready solutions enhanced by custom AI model development, automation pipelines, and resilient infrastructure that consistently met client expectations and market demands.</li>
      </ul>
    ),
    badges: [
      'Fractional CTO',
      'Business Discovery',
      'MVP Strategy',
      'RAG Pipelines',
      'Custom LLM Development',
      'Claude',
      'ChatGPT',
      'Gemini',
      'DeepSeek',
      'Workflow Automation',
      'Azure AI',
      'Pinecone',
      'Service Design',
      'Product Roadmapping',
      'Figma',
      'V0 (Vercel)'
    ]
  },
  {
    title: 'Program Manager',
    company: <a href="https://www.qualium-systems.com/" target="_blank" rel="noopener noreferrer">qualium-systems.com</a>,
    period: 'Jul 2018 — Feb 2023',
    location: 'Belgium / Ukraine',
    description: (
      <ul style={{ margin: 0, paddingLeft: 24 }}>
        <li>Oversaw two largescale software projects, leading a 30person team (developers, designers, QA) across web, mobile, and 3D platforms using React, Angular, Node.js, and .NET, while architecting cloud infrastructure and integrating large language model (LLM)–powered features to enhance product capabilities.</li>
        <li>Defined project scope, timelines, and budgets in an Agile Scrum environment, mitigating risks and ensuring quality through hands-on technical direction, infrastructure design, and alignment with key stakeholders.</li>
        <li>Implemented DevOps pipelines, AI-assisted testing workflows, and requirements traceability, driving predictable delivery and enhancing collaboration across distributed international teams.</li>
      </ul>
    ),
    badges: [
      'Full‑Stack Development',
      'MEAN Stack (MongoDB, Express, Angular, Node.js)',
      'RESTful APIs',
      'UI/Backend Integration',
      'Agile / Scrum',
      'Kanban',
      'Git & Version Control',
      'System Scalability',
      'Public Sector Projects',
      'Cross‑Functional Collaboration',
      'Performance Optimization'
    ]
  },
  {
    title: 'Lead Full-Stack Developer',
    company: <a href="https://carlvandevelde.be/" target="_blank" rel="noopener noreferrer">carlvandevelde.be</a>,
    period: 'Sep 2017 — Sep 2018',
    location: 'Schilde',
    description: (
      <ul style={{ margin: 0, paddingLeft: 24 }}>
        <li>Designed and developed cross-platform mobile and web applications using Ionic, AngularJS, ReactJS, and Laravel/Vue, ensuring seamless user experiences across devices.</li>
        <li>Built and integrated RESTful APIs with Node.js and MySQL, optimizing performance through debugging and system troubleshooting for robust digital solutions.</li>
        <li>Focused on end-to-end delivery, maintaining high reliability and responsiveness in both frontend and backend architectures.</li>
      </ul>
    ),
    badges: [
      'AngularJS', 'ReactJS', 'MySQL', 'Ionic', 'Laravel', 'REST APIs'
    ]
  },
  {
    title: 'Full-stack developer',
    company: <a href="https://www.digipolisantwerpen.be/" target="_blank" rel="noopener noreferrer">digipolisantwerpen.be</a>,
    period: 'Jul 2016 — Jul 2017',
    location: 'Antwerp',
    description: (
      <ul style={{ margin: 0, paddingLeft: 24 }}>
        <li>Developed scalable web applications using the MEAN stack (MongoDB, Express, Angular, Node.js), integrating UI components with backend services for optimal performance.</li>
        <li>Designed RESTful APIs and ensured system reliability in Agile Scrum and Kanban environments, collaborating with cross-functional teams using Git for version control.</li>
        <li>Gained foundational expertise in full-stack development, contributing to feature implementation and system scalability for public sector projects.</li>
      </ul>
    ),
    badges: [
      'Full‑Stack Development',
      'MEAN Stack (MongoDB, Express, Angular, Node.js)',
      'RESTful APIs',
      'UI/Backend Integration',
      'Agile / Scrum',
      'Kanban',
      'Git & Version Control',
      'System Scalability',
      'Public Sector Projects',
      'Cross‑Functional Collaboration',
      'Performance Optimization'
    ]
  },
  {
    title: 'Founder',
    company: <a href="https://kaizenprojects.be/" target="_blank" rel="noopener noreferrer">kaizenproject.be</a>,
    period: 'Jun 2016 — Present',
    location: 'Antwerp',
    description: (
      <ul style={{ margin: 0, paddingLeft: 24 }}>
        <li>Established a boutique consultancy delivering strategic product development and technical leadership, supporting startups and scaleups in building and scaling digital solutions with AI at their core.</li>
        <li>Guided agile transformations and introduced advanced AI-enhanced workflows, including Retrieval-Augmented Generation (RAG) systems, custom LLM model design, and automation pipelines—coaching teams to adopt tools like Cursor and AI-powered CI/CD for faster, smarter development cycles.</li>
        <li>Combined hands-on coding with high-level strategy, prototyping SaaS products, architecting AI-driven infrastructures, and driving business value through innovative technology implementations such as custom model training, vector database integration, and automated data workflows.</li>
      </ul>
    ),
    badges: [
      'Fractional CTO',
      'Product Strategy',
      'AI‑Driven Solutions',
      'RAG Pipelines',
      'Custom LLM Model Design',
      'Vector Database Integration',
      'Workflow Automation',
      'SaaS Prototyping',
      'Business Discovery',
      'Agile Transformation',
      'CI/CD Coaching',
      'Cloud Architecture',
      'Technical Leadership',
      'Innovation Management'
    ]
  }
];

const About = () => (
  <Main>
    <div className="about-container">
      {/* Main Profile Section */}
      <div className="about-main">
        <h1 style={{ ...highlight, fontSize: '2.2rem', marginBottom: 24 }}>| PROFILE</h1>
        <p className="profile-text">
          Technology and Product Leader with over a decade of experience and a deep, hands on understanding of the
          entire digital product lifecycle. Starting as a full stack developer, I became obsessed with tech and mastering
          every phase of product development from the importance of well designed UX/UI and rigorous validation, to
          Agile execution, leadership, and product management. In today’s exciting era of AI, I’m actively exploring and
          applying how AI can be leveraged across this process enhancing decision making, accelerating delivery, and
          creating smarter workflows. Equally important is business discovery: translating business needs into a clear
          product backlog and guiding teams from proof of concept through MVP, while ensuring quality, alignment, and
          measurable impact.
        </p>

        {/* EMPLOYMENT HISTORY */}
        <h2 style={{ ...highlight, fontSize: '1.8rem', margin: '48px 0 12px 0' }}>| EMPLOYMENT HISTORY</h2>
      </div>
      {/* Sidebar Section */}
      <div className="about-sidebar">
        <SidebarCard title='PERSONAL INFO'>
          <div style={{ marginBottom: 8 }}><span style={valueStyle}>14/01/1992, Rudny</span></div>
          <div style={{ marginBottom: 8 }}><span style={valueStyle}>Belgium</span></div>
        </SidebarCard>
        <SidebarCard title='LANGUAGES'>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
            <span style={valueStyle}>Dutch/Flemish</span><span style={nativeStyle}>Native</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
            <span style={valueStyle}>English</span><span style={nativeStyle}>Native</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={valueStyle}>Russian</span><span style={nativeStyle}>Native</span>
          </div>
        </SidebarCard>
        <SidebarCard title='ONGOING CERTIFICATIONS'>
          <div style={{ ...valueStyle, display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ color: '#DAA520', fontSize: '1.2em', transition: 'text-shadow 0.2s', cursor: 'pointer' }}>•</span> Digital MBA - CTO Academy
          </div>
          <div style={{ ...valueStyle, display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ color: '#DAA520', fontSize: '1.2em', transition: 'text-shadow 0.2s', cursor: 'pointer' }}>•</span> PMC Certification
          </div>
        </SidebarCard>
      </div>
    </div>

    {/* Render ALL employment cards full width, outside the flex row */}
    {employmentHistory.map((job) => (
      <div
        key={job.title + job.period}
        className="employment-card"
        style={{
          width: '100%',
          maxWidth: 'none',
          marginLeft: 0,
          marginRight: 0
        }}
      >
        <div className="employment-title">{job.title}</div>
        <div className="employment-meta">
          {job.company} <span style={{ color: '#DAA520' }}>•</span> <span className="employment-period">{job.period}</span>
        </div>
        <div className="employment-location">{job.location}</div>
        <div className="employment-description">{job.description}</div>
        <div style={{ marginTop: 12, display: 'flex', flexWrap: 'wrap' }}>
          {job.badges.map(badge => (
            <span key={badge} className="badge">{badge}</span>
          ))}
        </div>
      </div>
    ))}
  </Main>
);

export default About;
