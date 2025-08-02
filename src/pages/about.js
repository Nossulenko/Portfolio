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
    title: 'Lead Engineer | Product Manager',
    company: <a href="https://docbyte.com/" target="_blank" rel="noopener noreferrer">Docbyte</a>,
    period: 'Jun 2024 — May 2025',
    location: 'Gent',
    description: (
      <ul style={{ margin: 0, paddingLeft: 24 }}>
        <li>Directed technical strategy and product delivery for Europe's only Qualified Trust Service Provider (QTSP), ensuring compliance with EU trust and identity standards in a highly regulated SaaS environment.</li>
        <li>Pioneered AI-driven automation and cloud monitoring systems using AWS CloudWatch, slashing issue resolution times for customer support teams by enhancing real-time infrastructure visibility.</li>
        <li>Led cross-functional teams to launch new cloud-native SaaS products from concept to market, integrating secure system design and audit-ready processes for ISO 27001 certification.</li>
        <li>Contributed to executive decision-making in management meetings, aligning technology roadmaps with long-term business objectives for measurable impact.</li>
        <li>Leveraged Figma for prototyping and cross-platform frameworks such as Nextjs and React native to deliver performant, scalable mobile solutions efficiently.</li>
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
      'REST APIs',
      'Figma',
      'Next.js',
      'React Native'
    ]
  },
  {
    title: 'Management Partner | Product Manager',
    company: <a href="https://www.productarchitects.eu/" target="_blank" rel="noopener noreferrer">The Product Architects</a>,
    period: 'Aug 2023 — Jun 2024',
    location: 'Antwerp',
    description: (
      <ul style={{ margin: 0, paddingLeft: 24 }}>
        <li>Spearheaded development of earlystage MVPs with a UKbased engineering team, managing the full product lifecycle from ideation through technical handover, including infrastructure design, cloud architecture, and integration of Aldriven features to accelerate market differentiation.</li>
        <li>Ensured highquality, ontime releases by aligning crossfunctional efforts, leveraging Alassisted workflows, scalable backend design, and modern DevOps practices to optimize UX iterations and delivery sprints.</li>
        <li>Bridged business goals with technical execution, delivering productionready solutions enhanced by custom Al model development, automation pipelines, and resilient infrastructure that consistently met client expectations and market demands.</li>
        <li>Leveraged crossplatform mobile frameworks such as Flutter and React Native to deliver performant mobile solutions efficiently.</li>
        <li>Figma was used extensively to design, prototype, and validate products, enabling rapid iteration and clear communication of UX/UI concepts.</li>
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
    title: 'Product Manager',
    company: <a href="https://www.qualium-systems.com/" target="_blank" rel="noopener noreferrer">qualium-systems.com</a>,
    period: 'Jul 2018 — Feb 2023',
    location: 'Belgium / Ukraine',
    description: (
      <ul style={{ margin: 0, paddingLeft: 24 }}>
        <li>Oversaw two largescale software projects, leading a 30person team (developers, designers, QA) across web, mobile, and 3D platforms using React Native, Flutter, Node.js, and .NET, while architecting cloud infrastructure and integrating large language model (LLM)–powered features to enhance product capabilities.</li>
        <li>Defined project scope, timelines, and budgets in an Agile Scrum environment, mitigating risks and ensuring quality through handson technical direction, infrastructure design, and alignment with key stakeholders.</li>
        <li>Implemented DevOps pipelines, Alassisted testing workflows, and requirements traceability, driving predictable delivery and enhancing collaboration across distributed international teams.</li>
        <li>Figma served as a core tool for designing and testing product ideas, streamlining iterations and ensuring shared understanding of user experience goals.</li>
      </ul>
    ),
    badges: [
      'Full‑Stack Development',
      'MEAN Stack',
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
    title: 'Lead (full-stack) developer',
    company: <a href="https://carlvandevelde.be/" target="_blank" rel="noopener noreferrer">carlvandevelde.be</a>,
    period: 'Sep 2017 — Sep 2018',
    location: 'Schilde',
    description: (
      <ul style={{ margin: 0, paddingLeft: 24 }}>
        <li>Designed and developed cross-platform mobile and web applications using React Native and Ionic, AngularJS, React Native, and Laravel/Vue, ensuring seamless user experiences across devices.</li>
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
      'MEAN Stack',
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
    location: '2000 Antwerpen',
    description: (
      <ul style={{ margin: 0, paddingLeft: 24 }}>
        <li>Established a boutique consultancy delivering strategic product development and technical leadership, supporting startups and scaleups in building and scaling digital solutions with Al at their core.</li>
        <li>Guided agile transformations and introduced advanced Alenhanced workflows, including Retrieval - Augmented Generation (RAG) systems, custom LLM model design, and automation pipelines coaching teams to adopt tools like Cursor and Alpowered CI/CD for faster, smarter development cycles.</li>
        <li>Combined handson coding with highlevel strategy, prototyping SaaS products, architecting Aldriven infrastructures, and driving business value through innovative technology implementations such as custom model training, vector database integration, and automated data workflows.</li>
        <li>For Hybrid applications, leveraged frameworks like Nextjs, Angular, React Native, Flutter, or lonic to deliver crossplatform solutions efficiently.</li>
        <li>Extensive use of Figma enabled rapid prototyping, continuous validation of ideas, and clear communication of UX/UI direction.</li>
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

const About = () => {
  const [showFullProfile, setShowFullProfile] = React.useState(false);
  const [showDownloadForm, setShowDownloadForm] = React.useState(false);
  const [showAudioPopup, setShowAudioPopup] = React.useState(false);
  const [showChatPopup, setShowChatPopup] = React.useState(false);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [audio] = React.useState(new Audio('/sounds/nikolai-intro.mp3'));
  const [audioData, setAudioData] = React.useState(new Array(50).fill(4));
  const [chatMessages, setChatMessages] = React.useState([
    { id: 1, sender: 'ai', text: "Hi! I'm Nikolai's AI clone. How can I help you today?", timestamp: new Date() }
  ]);
  const [newMessage, setNewMessage] = React.useState('');
  const [isTyping, setIsTyping] = React.useState(false);
  const audioContextRef = React.useRef(null);
  const analyserRef = React.useRef(null);
  const sourceRef = React.useRef(null);
  const audioBufferRef = React.useRef(null);
  const startTimeRef = React.useRef(0);
  const pausedAtRef = React.useRef(0);

    // Initialize Web Audio API
  React.useEffect(() => {
    const initAudio = async () => {
      try {
        audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
        analyserRef.current = audioContextRef.current.createAnalyser();
        analyserRef.current.fftSize = 256;
        analyserRef.current.smoothingTimeConstant = 0.8;

                const response = await fetch('/sounds/nikolai-intro.mp3');
        const arrayBuffer = await response.arrayBuffer();
        audioBufferRef.current = await audioContextRef.current.decodeAudioData(arrayBuffer);

        sourceRef.current = audioContextRef.current.createBufferSource();
        sourceRef.current.buffer = audioBufferRef.current;
        sourceRef.current.connect(analyserRef.current);
        analyserRef.current.connect(audioContextRef.current.destination);
      } catch (error) {
        console.error('Error initializing audio:', error);
      }
    };

    initAudio();

    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  // Audio analysis loop
  React.useEffect(() => {
    if (!isPlaying || !analyserRef.current) return;

    const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount);
    const updateAudioData = () => {
      if (!isPlaying || !analyserRef.current) return;

      analyserRef.current.getByteFrequencyData(dataArray);

      // Convert frequency data to waveform bars
      const newAudioData = [];
      const step = Math.floor(dataArray.length / 50);

      for (let i = 0; i < 50; i++) {
        const start = i * step;
        const end = start + step;
        let sum = 0;
        for (let j = start; j < end && j < dataArray.length; j++) {
          sum += dataArray[j];
        }
        const average = sum / step;
        // Convert to height (4px to 60px)
        const height = Math.max(4, (average / 255) * 60);
        newAudioData.push(height);
      }

      setAudioData(newAudioData);
      requestAnimationFrame(updateAudioData);
    };

    updateAudioData();
  }, [isPlaying]);

  // Add audio event listeners
  React.useEffect(() => {
    audio.addEventListener('ended', () => {
      setIsPlaying(false);
    });

    return () => {
      audio.removeEventListener('ended', () => {
        setIsPlaying(false);
      });
    };
  }, [audio]);

  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    reason: ''
  });

  const shortProfileText = "Technology and Product Leader with over a decade of experience and a deep, hands-on understanding of the entire digital product lifecycle. Starting as a full-stack developer, I became passionate about mastering every phase of digital product development from early-stage ideation and facilitating workshops, translating complex business needs into clear product backlogs, shaping initial wireframes, and defining proofs of concept, to driving UX/UI design, applying rigorous validation, executing Agile methodologies, and ultimately architecting and designing enterprise-level infrastructures and managing products at scale. In today's exciting era of AI, I actively explore and apply how AI can be leveraged throughout this process to enhance decision-making, accelerate delivery, and create smarter, data-driven workflows.";

  const fullProfileText = "Technology and Product Leader with over a decade of experience and a deep, hands-on understanding of the entire digital product lifecycle. Starting as a full-stack developer, I became passionate about mastering every phase of digital product development from early-stage ideation and facilitating workshops, translating complex business needs into clear product backlogs, shaping initial wireframes, and defining proofs of concept, to driving UX/UI design, applying rigorous validation, executing Agile methodologies, and ultimately architecting and designing enterprise-level infrastructures and managing products at scale. In today's exciting era of AI, I actively explore and apply how AI can be leveraged throughout this process to enhance decision-making, accelerate delivery, and create smarter, data-driven workflows. As a Tech Lead, I've learned that technology alone is not enough, you can have great projects and brilliant engineers, but only through clear vision and strong leadership can teams achieve meaningful, measurable outcomes. I excel at building and enabling high-performing, cross-functional teams, setting direction, aligning technical strategy with business objectives, and fostering a culture of accountability and innovation. I bring strategic insight, governance, and operational discipline to ensure that teams deliver not only products but also tangible, measurable business results.";

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
          'Content-Type': 'application/json',
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
      link.download = 'Nikolai_Nossulenko_Resume.pdf';
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
          'Content-Type': 'application/json',
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
      <div className="about-container">
        {/* Main Profile Section */}
        <div className="about-main">
          <h1 className="employment-history-title" style={{ ...highlight, marginBottom: 24 }}>| PROFILE</h1>
          <p className="profile-text">
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
        <SidebarCard title='LISTEN ABOUT NIKOLAI'>
          <button
            onClick={() => {
              setShowAudioPopup(true);
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
            Listen about Nikolai
          </button>
        </SidebarCard>
      </div>
    </div>

    {/* EMPLOYMENT HISTORY - positioned to align with LinkedIn card */}
    <div style={{ marginTop: '20px' }}>
      <h2 className="employment-history-title" style={{
        ...highlight,
        margin: '0 0 24px 0',
        whiteSpace: 'nowrap'
      }}>| EMPLOYMENT HISTORY</h2>

      {employmentHistory.map((job, index) => (
        <div
          key={job.title + job.period}
          className="employment-card"
          style={{
            width: '100%',
            maxWidth: 'none',
            marginLeft: 0,
            marginRight: 0,
            marginTop: index === 0 ? '0' : '28px'
          }}
        >
          <div className="employment-title">{job.title}</div>
          <div className="employment-meta">
            {job.company} <span className="employment-bullet" style={{ color: '#DAA520' }}>•</span> <span className="employment-period">{job.period}</span>
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
    </div>

    {/* Download Form Modal */}
    {showDownloadForm && (
      <div className="modal-overlay">
        <div className="modal-content">
          <h2>Download Resume</h2>
          <form onSubmit={(e) => {
            e.preventDefault();
            handleDownload();
          }}>
            <div style={{ marginBottom: 15 }}>
              <label>First Name:</label>
              <input
                type="text"
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                required
              />
            </div>
            <div style={{ marginBottom: 15 }}>
              <label>Last Name:</label>
              <input
                type="text"
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                required
              />
            </div>
            <div style={{ marginBottom: 15 }}>
              <label>Email:</label>
              <input
                type="email"
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
                rows="4"
              ></textarea>
            </div>
            <button type="submit" style={{ background: '#DAA520', color: '#181A20', border: 'none', borderRadius: '8px', padding: '12px 20px', fontSize: '14px', fontWeight: 'bold', cursor: 'pointer', width: '100%', transition: 'all 0.2s ease', boxShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
              Download Resume
            </button>
            <button type="button" onClick={() => setShowDownloadForm(false)} style={{ background: '#181A20', color: '#DAA520', border: '1px solid #DAA520', borderRadius: '8px', padding: '12px 20px', fontSize: '14px', fontWeight: 'bold', cursor: 'pointer', width: '100%', transition: 'all 0.2s ease', marginTop: '10px' }}>
              Cancel
            </button>
          </form>
        </div>
      </div>
    )}

    {/* Audio Popup Modal */}
    {showAudioPopup && (
      <div className="modal-overlay">
        <div className="modal-content" style={{ maxWidth: '500px' }}>
          <h2 style={{ color: '#DAA520', marginBottom: '20px', textAlign: 'center' }}>
            Listen About Nikolai
          </h2>

                    {/* Audio Waveform Visualization */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '30px',
            height: '120px'
          }}>
            <div style={{
              position: 'relative',
              width: '300px',
              height: '80px',
              background: '#181A20',
              borderRadius: '10px',
              border: '2px solid #DAA520',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {/* Audio Waveform Bars */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '2px',
                height: '60px'
              }}>
                {audioData.map((height, i) => (
                  <div
                    key={i}
                    style={{
                      width: '4px',
                      background: '#DAA520',
                      borderRadius: '2px',
                      height: `${height}px`,
                      transition: 'height 0.1s ease'
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Audio Controls */}
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                                                <button
              onClick={async () => {
                if (!isPlaying) {
                  try {
                    if (audioContextRef.current && audioBufferRef.current) {
                      // Resume audio context if suspended
                      if (audioContextRef.current.state === 'suspended') {
                        await audioContextRef.current.resume();
                      }

                      // Create new audio source
                      sourceRef.current = audioContextRef.current.createBufferSource();
                      sourceRef.current.buffer = audioBufferRef.current;
                      sourceRef.current.connect(analyserRef.current);

                      // Calculate start time (resume from where we paused)
                      const currentTime = audioContextRef.current.currentTime;
                      const offset = pausedAtRef.current > 0 ? pausedAtRef.current : 0;

                      sourceRef.current.start(0, offset);
                      startTimeRef.current = currentTime - offset;
                      setIsPlaying(true);
                    } else {
                      // Fallback to HTML5 audio
                      audio.play().then(() => {
                        setIsPlaying(true);
                      }).catch(error => {
                        console.error('Error playing audio:', error);
                      });
                    }
                  } catch (error) {
                    console.error('Error playing audio:', error);
                  }
                } else {
                  try {
                    if (sourceRef.current) {
                      // Calculate current position before stopping
                      const currentTime = audioContextRef.current.currentTime;
                      pausedAtRef.current = currentTime - startTimeRef.current;

                      sourceRef.current.stop();
                      sourceRef.current = null;
                    } else {
                      audio.pause();
                    }
                    setIsPlaying(false);
                    setAudioData(new Array(50).fill(4));
                  } catch (error) {
                    console.error('Error stopping audio:', error);
                  }
                }
              }}
              style={{
                background: isPlaying ? '#B8860B' : '#DAA520',
                color: '#181A20',
                border: 'none',
                borderRadius: '8px',
                padding: '12px 24px',
                fontSize: '16px',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-1px)';
                e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 2px 4px rgba(0,0,0,0.2)';
              }}
            >
              {isPlaying ? 'Pause' : 'Play'}
            </button>
          </div>

          {/* Close Button */}
                              <button
            onClick={() => {
              if (sourceRef.current) {
                sourceRef.current.stop();
                sourceRef.current = null;
              } else {
                audio.pause();
                audio.currentTime = 0;
              }
              // Reset pause position
              pausedAtRef.current = 0;
              startTimeRef.current = 0;
              setShowAudioPopup(false);
              setIsPlaying(false);
              setAudioData(new Array(50).fill(4));
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
              transition: 'all 0.2s ease'
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
            Close
          </button>
        </div>
      </div>
    )}

    {/* Chat Popup Modal */}
    {showChatPopup && (
      <div className="modal-overlay">
        <div className="modal-content" style={{ maxWidth: '600px', height: '500px', display: 'flex', flexDirection: 'column' }}>
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
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter' && newMessage.trim()) {
                  handleSendMessage();
                }
              }}
              placeholder="Type your message..."
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
