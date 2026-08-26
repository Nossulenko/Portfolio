import React from 'react';
import { Main } from '../components/Main';
import SidebarCard from '../components/SidebarCard';
import { trackDownloadResume } from '../tools/analytics.js';
import './styles/about.css';

const highlight = {
  color: '#DAA520',
  fontWeight: 700,
  letterSpacing: 2,
  cursor: 'pointer'
};

const valueStyle = { color: '#fff', fontWeight: 400 };
const nativeStyle = {
  color: '#DAA520',
  marginLeft: 8,
  fontSize: '0.95em'
};

const employmentHistory = [
  {
    title: 'Co-Founder',
    company: <a href='https://baboonlabs.ai/' target='_blank' rel='noopener noreferrer'>Baboon Labs — De Cronos Groep</a>,
    period: 'Aug 2025 — Present',
    location: 'Antwerp',
    description: (
      <ul style={{ margin: 0, paddingLeft: 24 }}>
        <li>Architect of the lab's multi-agent delivery pipeline: coding agents handle scaffolding, boilerplate, and test generation while senior engineers own architecture, data, and production. Products shipped in weeks, not months.</li>
        <li>Shipped agent-assisted legacy modernization: translated PL/SQL codebases into readable business-logic specifications, then rebuilt them production-ready on a modern Java + Angular stack.</li>
        <li>Shipped a product that converts complex Excel workbooks into modern React applications for the manufacturing industry.</li>
        <li>Delivered RAG solutions and large-document processing engines for enterprise clients, end-to-end: model selection and evaluation, retrieval architecture, guardrails, observability, and inference-cost control.</li>
        <li>Facilitated "AI in Business & Functional Analysis" workshops in the insurance sector for teams of 60+; ran AI hackathons (Hack The Future) and built AI-native SDLC playbooks for enterprise delivery.</li>
      </ul>
    ),
    badges: [
      'Multi-Agent Systems',
      'Agentic Delivery',
      'RAG',
      'Legacy Modernization',
      'LLM Evaluation',
      'Guardrails',
      'AI-native SDLC',
      'Workshops & Enablement'
    ]
  },
  {
    title: 'Lead Engineer | Product Manager',
    company: <a href='https://docbyte.com/' target='_blank' rel='noopener noreferrer'>Docbyte</a>,
    period: 'Jun 2024 — May 2025',
    location: 'Gent',
    description: (
      <ul style={{ margin: 0, paddingLeft: 24 }}>
        <li>Shipped ML-powered document-intelligence pipelines on AWS (Bedrock, Textract, SageMaker, complemented by Google OCR) for automated information extraction in compliance-critical workflows at a Qualified Trust Service Provider (QTSP).</li>
        <li>Designed AWS architectures with Terraform; built observability with Grafana, QuickSight, and CloudWatch — real-time dashboards that accelerated incident detection and resolution.</li>
        <li>Led disaster-recovery exercises with the engineering team: failure-scenario design, RTO/RPO validation, and hardened runbooks for a platform where downtime breaks legally binding trust services.</li>
        <li>Designed new products and led cross-functional teams from concept to market; facilitated penetration tests and security reviews for audit-ready ISO 27001 processes.</li>
        <li>Delivered C-level reporting on cloud initiatives, risk, and compliance.</li>
      </ul>
    ),
    badges: [
      'Document Intelligence',
      'AWS Bedrock',
      'Textract',
      'SageMaker',
      'Terraform',
      'Grafana',
      'QuickSight',
      'Disaster Recovery',
      'ISO 27001',
      'QTSP',
      'C-level Reporting'
    ]
  },
  {
    title: 'Management Partner | Product Manager',
    company: <a href='https://www.productarchitects.eu/' target='_blank' rel='noopener noreferrer'>The Product Architects</a>,
    period: 'Aug 2023 — Jun 2024',
    location: 'Antwerp',
    description: (
      <ul style={{ margin: 0, paddingLeft: 24 }}>
        <li>Owned the full product lifecycle for early-stage MVPs: discovery workshops and ideation, prioritized backlog and roadmap, Figma wireframes and prototypes, validated MVP, and technical handover to a UK-based engineering team.</li>
        <li>Built BreezeSim (breezesim.com) together with the eSIM Go team in Banbury, England: responsible for the full frontend development of this consumer platform for eSIM travel data (data plans for 190+ countries), alongside product shaping and the launch on top of eSIM Go's wholesale eSIM infrastructure.</li>
        <li>Translated ambiguous business needs into clear product specifications; de-risked builds through rapid prototype-and-validate cycles with real users before committing engineering capacity.</li>
        <li>Advised major airlines and airports (Swiss Air, Lufthansa Group, Air Astana) on digital transformation: cloud adoption, compliance, and data-driven operations.</li>
        <li>Integrated custom AI features: LLM APIs, automation pipelines, and AI-assisted workflows for UX iteration and delivery sprints; Flutter and React Native delivery.</li>
      </ul>
    ),
    badges: [
      'Product Lifecycle',
      'MVP Validation',
      'Figma',
      'BreezeSim',
      'eSIM Platform',
      'Aviation Consulting',
      'LLM APIs',
      'Flutter',
      'React Native'
    ]
  },
  {
    title: 'Technical Lead',
    company: <a href='https://www.qualium-systems.com/' target='_blank' rel='noopener noreferrer'>Qualium Systems</a>,
    period: 'Jul 2018 — Feb 2023',
    location: 'Belgium / Ukraine (on-site)',
    description: (
      <ul style={{ margin: 0, paddingLeft: 24 }}>
        <li>Led a large cross-functional engineering team (developers, designers, QA) across two large-scale cloud projects on web, mobile, and 3D platforms (React Native, Flutter, Node.js, .NET).</li>
        <li>Built NLP pipelines (spaCy, NLTK) and shipped early GPT-3 / OpenAI API integrations into product features from 2021 — production LLM work well before the ChatGPT era.</li>
        <li>Defined scope, planning, and budget in Agile Scrum; introduced DevOps pipelines, monitoring, AI-assisted testing, and requirements traceability across distributed international teams.</li>
      </ul>
    ),
    badges: [
      'Team Leadership',
      'NLP',
      'spaCy',
      'NLTK',
      'GPT-3',
      'OpenAI API',
      'Agile Scrum',
      'DevOps Pipelines',
      'React Native',
      'Flutter',
      '.NET'
    ]
  },
  {
    title: 'Full-Stack Developer',
    company: <span>PAU · Alpha IT</span>,
    period: 'Oct 2019 — May 2021',
    location: 'Antwerp region — enterprise software',
    description: (
      <ul style={{ margin: 0, paddingLeft: 24 }}>
        <li>Full-stack development of enterprise web and mobile applications: front-end, REST APIs, and cloud integration.</li>
      </ul>
    ),
    badges: [
      'Enterprise Software',
      'Full-Stack Development',
      'REST APIs',
      'Cloud Integration'
    ]
  }
];

const About = () => {
  const [showFullProfile, setShowFullProfile] = React.useState(false);
  const [showDownloadForm, setShowDownloadForm] = React.useState(false);
  const [showChatPopup, setShowChatPopup] = React.useState(false);
  const [chatMessages, setChatMessages] = React.useState([
    { id: 1, sender: 'ai', text: "Hi! I'm Nikolai's AI clone. How can I help you today?", timestamp: new Date() }
  ]);
  const [newMessage, setNewMessage] = React.useState('');
  const [isTyping, setIsTyping] = React.useState(false);

  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    reason: ''
  });

  const shortProfileText = "🚀 AI Engineer & Product Leader · Co-Founder at Baboon Labs (De Cronos Groep). Full-stack developer grown into AI engineer: over the past decade I've built digital products end-to-end — front-end, back-end, cloud infrastructure, and the product decisions in between. Since 2020 my work has steadily converged on applied AI: NLP pipelines and early GPT-3 integrations, LLM-powered product features in large-scale platforms, ML document intelligence in a regulated trust-services environment, and today agentic delivery systems at Baboon Labs.";

  const fullProfileText = "🚀 AI Engineer & Product Leader · Co-Founder at Baboon Labs (De Cronos Groep). Full-stack developer grown into AI engineer: over the past decade I've built digital products end-to-end — front-end, back-end, cloud infrastructure, and the product decisions in between. Since 2020 my work has steadily converged on applied AI: NLP pipelines and early GPT-3 integrations, LLM-powered product features in large-scale platforms, ML document intelligence in a regulated trust-services environment, and today agentic delivery systems at Baboon Labs. I combine that technical depth with product leadership: roadmap and KPI definition, Agile delivery with large cross-functional engineering teams, fractional-CTO engagements, and C-level reporting. My way of working is spec-driven development, with specifications as the source of truth driving agent implementation. I build AI systems that hold up in production — with real users, real data, and real compliance requirements.";

  const handleDownload = async () => {
    // Check if all required fields are filled
    const requiredFields = ['firstName', 'lastName', 'email', 'reason'];
    const missingFields = requiredFields.filter(field => !formData[field].trim());

    if (missingFields.length > 0) {
      alert('Please fill in all required fields before downloading.');
      return;
    }

    try {
      // Send form data to backend API
      const response = await fetch('/api/download-resume', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to process download request');
      }

      const result = await response.json();
      console.log('Download processed:', result);

      // Track the download event with user data
      trackDownloadResume(formData);

      // Download the resume
      const link = document.createElement('a');
      link.href = '/resume.pdf';
      link.download = 'Nikolai_Nossulenko_CV.pdf';
      link.click();

      // Close the form
      setShowDownloadForm(false);
      setFormData({ firstName: '', lastName: '', email: '', reason: '' });
    } catch (error) {
      console.error('Error processing download:', error);
      alert('There was an error processing your download request. Please try again.');
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSendMessage = async () => {
    if (!newMessage.trim() || isTyping) return;

    const userMessage = {
      id: Date.now(),
      sender: 'user',
      text: newMessage.trim(),
      timestamp: new Date()
    };

    setChatMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    setIsTyping(true);

    try {
      // Call your AI API endpoint
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: newMessage.trim(),
          conversationHistory: chatMessages.map(msg => ({
            role: msg.sender === 'user' ? 'user' : 'assistant',
            content: msg.text
          }))
        })
      });

      if (!response.ok) {
        throw new Error('Failed to get AI response');
      }

      const data = await response.json();

      const aiMessage = {
        id: Date.now() + 1,
        sender: 'ai',
        text: data.response,
        timestamp: new Date()
      };

      setChatMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error getting AI response:', error);

      // Fallback response
      const fallbackMessage = {
        id: Date.now() + 1,
        sender: 'ai',
        text: "I apologize, but I'm having trouble connecting to my AI system right now. Please try again in a moment.",
        timestamp: new Date()
      };

      setChatMessages(prev => [...prev, fallbackMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <Main>
      <div className='about-container'>
        {/* Main Profile Section */}
        <div className='about-main'>
          <h1 className='employment-history-title' style={{ ...highlight, marginBottom: 24 }}>| PROFILE</h1>
          <p className='profile-text'>
            {showFullProfile ? fullProfileText : shortProfileText}
            {!showFullProfile && (
              <span
                onClick={() => setShowFullProfile(true)}
                style={{
                  color: '#DAA520',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  marginLeft: '8px'
                }}
              >
                ... Read more
              </span>
            )}
            {showFullProfile && (
              <span
                onClick={() => setShowFullProfile(false)}
                style={{
                  color: '#DAA520',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  marginLeft: '8px'
                }}
              >
                ... Show less
              </span>
            )}
          </p>

        </div>
        {/* Sidebar Section */}
        <div className='about-sidebar'>
          <SidebarCard title='PERSONAL INFO'>
            <div style={{ marginBottom: 8 }}><span style={valueStyle}>14/01/1992, Rudny</span></div>
            <div style={{ marginBottom: 8 }}><span style={valueStyle}>Belgium</span></div>
          </SidebarCard>
          <SidebarCard title='LANGUAGES'>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
              <span style={valueStyle}>Dutch/Flemish</span><span style={nativeStyle}>Native</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
              <span style={valueStyle}>Russian</span><span style={nativeStyle}>Native</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={valueStyle}>English</span><span style={nativeStyle}>Professional</span>
            </div>
          </SidebarCard>
          <SidebarCard title='EDUCATION'>
            <div style={{ marginBottom: 4 }}><span style={valueStyle}>AP Hogeschool Antwerpen</span></div>
            <div style={{ marginBottom: 4 }}><span style={valueStyle}>Elektronica-ICT · 2015 — 2018</span></div>
            <div><span style={{ ...valueStyle, opacity: 0.8 }}>Software Development & Cyber Security</span></div>
          </SidebarCard>
          <SidebarCard title='PUBLICATIONS'>
            <div><span style={valueStyle}>Featured in Gazet van Antwerpen — cybersecurity research (real-estate scammer unmasked)</span></div>
          </SidebarCard>
          <SidebarCard title='DOWNLOAD RESUME'>
            <button
              onClick={() => setShowDownloadForm(true)}
              style={{
                background: '#DAA520',
                color: '#181A20',
                border: 'none',
                borderRadius: '8px',
                padding: '12px 20px',
                fontSize: '14px',
                fontWeight: 'bold',
                cursor: 'pointer',
                width: '100%',
                transition: 'all 0.2s ease',
                boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#B8860B';
                e.target.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#DAA520';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              Download PDF Resume
            </button>
          </SidebarCard>
          <SidebarCard title='CHAT WITH NIKOLAI'>
            <button
              onClick={() => {
                setShowChatPopup(true);
              }}
              style={{
                background: '#DAA520',
                color: '#181A20',
                border: 'none',
                borderRadius: '8px',
                padding: '12px 20px',
                fontSize: '14px',
                fontWeight: 'bold',
                cursor: 'pointer',
                width: '100%',
                transition: 'all 0.2s ease',
                boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#B8860B';
                e.target.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#DAA520';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              Chat with Nikolai
            </button>
          </SidebarCard>
        </div>
      </div>

      {/* EMPLOYMENT HISTORY - positioned to align with LinkedIn card */}
      <div style={{ marginTop: '20px' }}>
        <h2 className='employment-history-title' style={{
          ...highlight,
          margin: '0 0 24px 0',
          whiteSpace: 'nowrap'
        }}>| EMPLOYMENT HISTORY</h2>

        {employmentHistory.map((job, index) => (
          <div
            key={job.title + job.period}
            className='employment-card'
            style={{
              width: '100%',
              maxWidth: 'none',
              marginLeft: 0,
              marginRight: 0,
              marginTop: index === 0 ? '0' : '28px'
            }}
          >
            <div className='employment-title'>{job.title}</div>
            <div className='employment-meta'>
              {job.company} <span className='employment-bullet' style={{ color: '#DAA520' }}>•</span> <span className='employment-period'>{job.period}</span>
            </div>
            <div className='employment-location'>{job.location}</div>
            <div className='employment-description'>{job.description}</div>
            <div style={{ marginTop: 12, display: 'flex', flexWrap: 'wrap' }}>
              {job.badges.map(badge => (
                <span key={badge} className='badge'>{badge}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Download Form Modal */}
      {showDownloadForm && (
        <div className='modal-overlay'>
          <div className='modal-content'>
            <h2>Download Resume</h2>
            <form onSubmit={(e) => {
              e.preventDefault();
              handleDownload();
            }}>
              <div style={{ marginBottom: 15 }}>
                <label>First Name:</label>
                <input
                  type='text'
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  required
                />
              </div>
              <div style={{ marginBottom: 15 }}>
                <label>Last Name:</label>
                <input
                  type='text'
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  required
                />
              </div>
              <div style={{ marginBottom: 15 }}>
                <label>Email:</label>
                <input
                  type='email'
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                />
              </div>
              <div style={{ marginBottom: 15 }}>
                <label>Reason for Download:</label>
                <textarea
                  value={formData.reason}
                  onChange={(e) => handleInputChange('reason', e.target.value)}
                  required
                  rows='4'
                />
              </div>
              <button type='submit' style={{ background: '#DAA520', color: '#181A20', border: 'none', borderRadius: '8px', padding: '12px 20px', fontSize: '14px', fontWeight: 'bold', cursor: 'pointer', width: '100%', transition: 'all 0.2s ease', boxShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
                Download Resume
              </button>
              <button type='button' onClick={() => setShowDownloadForm(false)} style={{ background: '#181A20', color: '#DAA520', border: '1px solid #DAA520', borderRadius: '8px', padding: '12px 20px', fontSize: '14px', fontWeight: 'bold', cursor: 'pointer', width: '100%', transition: 'all 0.2s ease', marginTop: '10px' }}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Chat Popup Modal */}
      {showChatPopup && (
        <div className='modal-overlay'>
          <div className='modal-content' style={{ maxWidth: '600px', height: '500px', display: 'flex', flexDirection: 'column' }}>
            <h2 style={{ color: '#DAA520', marginBottom: '20px', textAlign: 'center' }}>
              Chat with Nikolai's AI Clone
            </h2>

            {/* Chat Messages */}
            <div style={{
              flex: 1,
              overflowY: 'auto',
              marginBottom: '20px',
              padding: '10px',
              background: 'rgba(24, 26, 32, 0.3)',
              borderRadius: '8px',
              border: '1px solid rgba(218, 165, 32, 0.2)'
            }}>
              {chatMessages.map((message) => (
                <div
                  key={message.id}
                  style={{
                    marginBottom: '15px',
                    display: 'flex',
                    justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start'
                  }}
                >
                  <div style={{
                    maxWidth: '70%',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    background: message.sender === 'user' ? '#DAA520' : 'rgba(218, 165, 32, 0.1)',
                    color: message.sender === 'user' ? '#181A20' : '#DAA520',
                    border: message.sender === 'user' ? 'none' : '1px solid rgba(218, 165, 32, 0.3)',
                    fontSize: '14px',
                    lineHeight: '1.4'
                  }}>
                    {message.text}
                    <div style={{
                      fontSize: '11px',
                      opacity: 0.7,
                      marginTop: '4px'
                    }}>
                      {message.timestamp.toLocaleTimeString()}
                    </div>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div style={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  marginBottom: '15px'
                }}>
                  <div style={{
                    padding: '12px 16px',
                    borderRadius: '12px',
                    background: 'rgba(218, 165, 32, 0.1)',
                    color: '#DAA520',
                    border: '1px solid rgba(218, 165, 32, 0.3)',
                    fontSize: '14px'
                  }}>
                    <span style={{ animation: 'typing 1.5s infinite' }}>AI is typing...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Message Input */}
            <div style={{ display: 'flex', gap: '10px' }}>
              <input
                type='text'
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && newMessage.trim()) {
                    handleSendMessage();
                  }
                }}
                placeholder='Type your message...'
                style={{
                  flex: 1,
                  padding: '12px 16px',
                  border: '1px solid rgba(218, 165, 32, 0.3)',
                  borderRadius: '8px',
                  background: 'rgba(24, 26, 32, 0.3)',
                  color: '#e0e0e0',
                  fontSize: '14px'
                }}
              />
              <button
                onClick={handleSendMessage}
                disabled={!newMessage.trim() || isTyping}
                style={{
                  padding: '12px 20px',
                  background: newMessage.trim() && !isTyping ? '#DAA520' : 'rgba(218, 165, 32, 0.3)',
                  color: newMessage.trim() && !isTyping ? '#181A20' : 'rgba(218, 165, 32, 0.5)',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  cursor: newMessage.trim() && !isTyping ? 'pointer' : 'not-allowed',
                  transition: 'all 0.2s ease'
                }}
              >
                Send
              </button>
            </div>

            {/* Close Button */}
            <button
              onClick={() => {
                setShowChatPopup(false);
                setChatMessages([
                  { id: 1, sender: 'ai', text: "Hi! I'm Nikolai's AI clone. How can I help you today?", timestamp: new Date() }
                ]);
                setNewMessage('');
                setIsTyping(false);
              }}
              style={{
                background: '#181A20',
                color: '#DAA520',
                border: '1px solid #DAA520',
                borderRadius: '8px',
                padding: '12px 20px',
                fontSize: '14px',
                fontWeight: 'bold',
                cursor: 'pointer',
                width: '100%',
                transition: 'all 0.2s ease',
                marginTop: '15px'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#DAA520';
                e.target.style.color = '#181A20';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#181A20';
                e.target.style.color = '#DAA520';
              }}
            >
              Close Chat
            </button>
          </div>
        </div>
      )}
    </Main>
  );
};

export default About;
