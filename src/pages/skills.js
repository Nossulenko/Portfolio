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
    title: 'Agentic Systems',
    description: 'Multi-agent orchestration, tool use, guardrails, and evaluation harnesses | Daily drivers: the Claude and Codex model families, with open-weight GLM and Kimi for cost-efficient workloads | Self-hosted deployments with DeepSeek and Ollama'
  },
  {
    title: 'Context, Prompt & Graph Engineering',
    description: 'Context-window architecture: memory design, retrieval injection, tool-result shaping | Structured prompting and prompt caching for cost and latency reduction | Agent graphs and control-loop design for reliable multi-step behavior'
  },
  {
    title: 'Retrieval Architectures & RAG',
    description: 'Embedding pipelines, hybrid search, and vector stores: Pinecone, Weaviate, FAISS, ChromaDB | Tuned for relevance, latency, and cost | RAG solutions and large-document processing engines delivered end-to-end for enterprise clients'
  },
  {
    title: 'AI Platforms (Multi-Cloud)',
    description: 'Azure: Azure OpenAI, AI Foundry, Azure ML, and the full AI Services suite (Language, Vision, Speech, Document Intelligence) | Google Cloud: Vertex AI with Gemini, Agent Builder, Document AI, Vision & Speech APIs | AWS: Bedrock, SageMaker, Textract'
  },
  {
    title: 'Model Training & Fine-Tuning',
    description: 'Small models trained from scratch | Fine-tuning, adaptation, and evaluation of LLMs, SLMs, and vision-language models (VLMs) for domain-specific tasks | Across open-weight and hosted models'
  },
  {
    title: 'NLP & LLM Tooling',
    description: 'spaCy, NLTK, Hugging Face Transformers, LangChain | PyTorch, TensorFlow, pandas | OpenAI API integrations since GPT-3 (2021), Anthropic API'
  },
  {
    title: 'AI-Assisted SDLC',
    description: 'Specialty: spec-driven development, with specifications as the source of truth for agent implementation | Multi-model agentic development with Claude Code, Gemini CLI, opencode, Cursor, and VS Code | Evaluation-driven development and AI-powered CI/CD'
  },
  {
    title: 'Product Engineering',
    description: 'Structured specs from raw input: interview transcripts, workshop notes, backlogs, technical documentation, legacy code, Figma designs, styling libraries, and brandbooks | Stakeholder alignment: discovery workshops, requirements negotiation, shared roadmaps across business and engineering | Rapid validation: prototype and PRD validated with stakeholders before committing engineering capacity | UX foundations: interfaces designed by established UI/UX laws (cognitive load, Hick, Fitts, Jakob) | Knowledge capture: markdown-first knowledge bases readable by human and agent'
  },
  {
    title: 'Tech Stack',
    description: 'Front-end: React, React Native, Next.js, Flutter, Angular, TypeScript | Back-end: Node.js, Python, .NET, FastAPI, PostgreSQL, MongoDB, Firebase | Cloud & DevOps: AWS, Azure, Google Cloud, Docker, Kubernetes, Terraform, Git, CI/CD, Vercel | Product & Design: Figma, Jira, Confluence — prototyping, validation, roadmapping'
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
