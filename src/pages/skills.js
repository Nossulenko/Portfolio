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
    title: 'Team Leadership & Collaboration',
    description: 'Agile & Scrum facilitation (sprint planning, retrospectives, backlog refinement) | Coaching & mentoring engineers and data scientists | Driving cross-functional collaboration across product, engineering, and research teams'
  },
  {
    title: 'Tools & Workflow Optimization',
    description: 'Project & knowledge management: Jira, Confluence | Version control & collaboration: Git, GitHub/GitLab | CI/CD pipelines & monitoring dashboards for production reliability'
  },
  {
    title: 'Cloud & Infrastructure Expertise',
    description: 'AWS: SageMaker (end-to-end ML lifecycle), Lambda (serverless apps), Textract (OCR), Comprehend (NLP), Rekognition (vision), Polly (speech), Bedrock (generative AI/LLMs) | Azure: AI Services, Cognitive Services, Machine Learning, Bot Service, Computer Vision, Language Understanding'
  },
  {
    title: 'AI/ML Ops & Intelligent Automation',
    description: 'Container orchestration: Docker & Kubernetes (AI workload scaling) | ML lifecycle management: MLflow, Kubeflow | LLM ecosystems: OpenAI GPT, Anthropic Claude, Google Gemini | NLP stack: spaCy, Hugging Face Transformers, NLTK | AI agents & orchestration frameworks (LangChain, custom solutions) | Workflow automation: Python, FastAPI, NestJS | Intelligent observability: CloudWatch, Grafana'
  },
  {
    title: 'Vector Databases & RAG (Retrieval-Augmented Generation)',
    description: 'Architecture & deployment of vector databases for semantic search and AI memory | Expertise with Pinecone, Weaviate, and FAISS (indexing, retrieval optimization) | Seamless integration with LangChain and AI agents for RAG pipelines | Embedding model optimization (OpenAI, Hugging Face, custom-trained) for recall/precision trade-offs | Real-world applications: knowledge base search, document intelligence, AI chatbots with memory, intelligent monitoring'
  },
  {
    title: 'Coding Patterns & Software Architecture',
    description: 'Object-Oriented Design (SOLID principles, DRY, clean code practices) | Design patterns: Factory, Singleton, Observer, Strategy, Adapter, Builder | Event-driven and microservices architecture | Asynchronous & reactive programming (Python asyncio, NestJS async providers) | API design best practices (REST, GraphQL, gRPC) | Modular, testable, and maintainable codebases (unit testing, TDD, CI/CD integration)'
  },
  {
    title: 'Security & Compliance',
    description: 'Security frameworks: ISO 27001, SOC 2 | OWASP (application security best practices & secure coding standards) | Secure system design & risk management | Coordinating and managing penetration tests (pentests)'
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
