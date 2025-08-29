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
    title: 'Team Leadership',
    description: 'Agile/Scrum, Coaching & Mentoring, Cross-functional Collaboration'
  },
  {
    title: 'Tools & Workflow',
    description: 'Jira, Confluence, Git, CI/CD, Monitoring Dashboards'
  },
  {
    title: 'Cloud & Infrastructure',
    description: 'AWS: SageMaker (end-to-end ML), Lambda (serverless), Textract (OCR/document processing), Comprehend (NLP), Rekognition (vision), Polly (speech), Bedrock (generative AI & LLMs) | Azure: AI Services, Cognitive Services, Machine Learning, Bot Service, Computer Vision, Language Understanding'
  },
  {
    title: 'AI/ML Ops & Automation',
    description: 'Docker & Kubernetes (AI workload orchestration), MLflow & Kubeflow (model lifecycle), LangChain + Vector DBs (Pinecone, Weaviate, FAISS) for LLM-powered apps, RAG pipelines for AI agent memory | LLMs (OpenAI GPT, Anthropic Claude, Google Gemini), NLP (spaCy, Hugging Face Transformers, NLTK), AI Agents (LangChain, custom orchestration), Workflow Automation (Python, FastAPI, Node.js), Intelligent Monitoring Systems (CloudWatch, Grafana)'
  },
  {
    title: 'Security & Compliance',
    description: 'ISO 27001, SOC 2, Secure System Design, Risk Management, Coordinating and Managing Pentests'
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
