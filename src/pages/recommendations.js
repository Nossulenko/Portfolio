import React, { useState } from 'react';
import { Main } from '../components/Main';

const recommendations = [
  {
    name: 'Krishnanshu Rathore',
    title: 'Building AI Workflows',
    date: 'May 27, 2025',
    relationship: 'Krishnanshu reported directly to Nikolai',
    text: "I've worked with Nikolai and can confidently say he's one of the best managers I've met. He leads with a rare balance of clear direction and trust. People feel supported under his leadership, and he's always ready to step in when needed. He not only manages well but actively supports and guides his team's growth. Working with him has been both productive and a real pleasure."
  },
  {
    name: 'Bente De Wilde',
    title: 'Applied Computer Science student at HOGENT',
    date: 'May 26, 2025',
    relationship: 'Bente reported directly to Nikolai',
    text: "I had the pleasure of working with Nikolai during my internship at DocByte, and I can confidently say he is an exceptional mentor and teammate. From day one, he made me feel welcome and gave me the trust and space to grow within the team.\n\nWhat I appreciated most was his ability to explain complex topics clearly and patiently. Whether it was Angular best practices, testing strategies, or general software development principles, Nikolai always provided thoughtful and constructive guidance that helped me improve significantly.\n\nBeyond his technical expertise, Nikolai is a driving force within the team. He combines deep knowledge with a clear vision and genuine involvement in team processes. His contributions to collaboration, code quality, and knowledge sharing make him an inspiring example for junior developers like myself.\n\nThanks to his support, I feel more confident and better prepared for the professional world. I'm truly grateful to have learned from him, and I highly recommend Nikolai as a colleague, mentor, or team lead in any software development environment."
  },
  {
    name: 'Velizar Todorov',
    title: 'Make software function. 🧑‍💻👨‍💻 | Java Developer',
    date: 'May 26, 2025',
    relationship: 'Velizar reported directly to Nikolai',
    text: "I had the privilege to work with Nikolai in the Docbyte ecosystem. He established an incident management flow that created a tight boundary between service desk and engineering to solve production problems from the root cause, which led to improved customer satisfaction and reduced pressure on the service desk.\n\nNikolai also facilitated improvements in FinOps procedures, which resulted in saving funds and simplifying internal technical infrastructure.\n\nI observed Nikolai's skill in balancing Kanban and Scrum methodologies, evaluating past sprints while allowing flexibility for future issues and client satisfaction.\n\nI also observed Nikolai's passion for product improvement across various areas: software architecture, financial operations, internal processes or organizational problems.\n\nI would definitely recommend Nikolai and I think he will be valuable asset for every organization, which would want to level up in technical or business domain."
  },
  {
    name: 'Alexandre Reis',
    title: 'Senior Project Manager & Scrum Master, PRINCE2® & AGILE',
    date: 'July 9, 2024',
    relationship: 'Alexandre worked with Nikolai but they were at different companies',
    text: "I highly recommend Nikolai for his exceptional skills and dedication. Working together at eSIM GO, he consistently delivered high-quality work and demonstrated a strong commitment to excellence. Nikolai is a proactive problem solver and a valuable team player, always willing to share knowledge and support colleagues. His expertise as a designer and developer has been instrumental to our success. Any team would be fortunate to have him!"
  },
  {
    name: 'Yevhen Volodko',
    title: 'Product Designer',
    date: 'July 7, 2024',
    relationship: 'Yevhen worked with Nikolai but they were at different companies',
    text: "Collaborating with Nikolai Nossulenko on website development and UX design improvements was a delight - excellent communication, creative workflow, and seamless teamwork. A true professional who elevates every project. I'm grateful for the opportunity to have worked alongside him."
  },
  {
    name: 'Nordin Mahboub',
    title: 'Freelance consultant @ Inspire & More',
    date: 'June 25, 2024',
    relationship: 'Nordin worked with Nikolai on the same team',
    text: "I had the pleasure of working with Nikolai at TPA, where his dedication, exceptional skills and impressive ability to solve complex problems efficiently consistently stood out. His positive attitude and collaborative spirit made him a valued member of the team."
  },
  {
    name: 'Darren Shaw',
    title: 'Making connectivity easy',
    date: 'June 19, 2024',
    relationship: 'Darren managed Nikolai directly',
    text: "Nikolai is a true professional and was a pleasure to work with. He is a multi-disciplined product specialist who can lift ideas off paper and turn them into working world-class products. His UX experience is second to none."
  },
  {
    name: 'Robert Carter',
    title: 'Head of breeze at Esim-Go',
    date: 'June 18, 2024',
    relationship: 'Robert worked with Nikolai but they were at different companies',
    text: "In my time working with Nikolai, he showed a strong grasp of ux principles and delivered wireframes of the highest standard. He worked tirelessly to ensure that tight deadlines were met, whilst providing expert insight into how solutions could be technically delivered. I would highly recommend Nikolais services to anyone looking to improved their digital services."
  },
  {
    name: 'Olesia Kornilova',
    title: 'Senior Business Development Manager | AR in Surgery',
    date: 'June 18, 2024',
    relationship: 'Olesia worked with Nikolai on the same team',
    text: "I've been working with Nikolai in different forms - he was my client once, as well as we were working together while Nikolai was managing my work.\n\nI could definitely recommend Nikolai, as he is super responsible, knowledgeable in his main strengths (software engineering, PM, business analytics and managing a big team), creative and out-of-the-box thinker. Besides that, he is a great communicator, motivated professional and just a very kind person."
  },
  {
    name: 'Andrii (André) Komar',
    title: 'Helping founders grow | GTM, Brand, Sales',
    date: 'June 18, 2024',
    relationship: 'Nikolai was Andrii (André)\'s client',
    text: "We worked with Nikolai on building outbound sales for one of the companies he worked with. I found Nikolai honest, reasonable and cooperative. I think he's a great partner to work with."
  },
  {
    name: 'Alain De Keyser',
    title: 'Managing Partner at The Product Architects. Venture developer, start-up & scale-up coach.',
    date: 'October 4, 2023',
    relationship: 'Alain worked with Nikolai on the same team',
    text: "It is a pleasure working with Nikolai Nossulenko at The Product Architects, where he serves as a Senior Prototyper and Full-Stack Developer. Thanks to his technical background, Nikolai transforms abstract concepts and ideas into concrete, digital products, and solutions. As such he effectively ensures alignment with business objectives while delivering exceptional user experiences. Nikolai is a team player, sharing his knowledge without reservation. His contributions have elevated the quality of our projects and have enriched our team's collective skill set."
  },
  {
    name: 'Andrey Nechepurenko, Ph.D. in Economics, PSM I, PSPO I',
    title: 'Senior Business Analyst – Grid Dynamics',
    date: 'September 17, 2021',
    relationship: 'Nikolai was Andrey\'s client',
    text: "I had the pleasure to work with Nikolai. First of all, I want to admit his proactive attitude and growth mindset along the way that we were working on his projects. Secondly, his productivity is amazing - he is ready to work 24 h to get a result. The charismatic impact that Nikolay can have on others leaving a truly memorable impression on me."
  }
];

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

const RecommendationCard = ({ recommendation }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxChars = 200;
  const shouldTruncate = recommendation.text.length > maxChars;
  const displayText = isExpanded ? recommendation.text : recommendation.text.substring(0, maxChars) + '...';

  return (
    <div style={{
      marginBottom: 32,
      padding: 24,
      background: 'rgba(24, 26, 32, 0.15)',
      backdropFilter: 'blur(20px) saturate(180%)',
      WebkitBackdropFilter: 'blur(20px) saturate(180%)',
      borderRadius: 16,
      border: '1px solid rgba(255, 255, 255, 0.1)',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
      position: 'relative',
      overflow: 'hidden',
      transition: 'all 0.3s ease'
    }}>
      {/* Glass overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(135deg, rgba(218, 165, 32, 0.08) 0%, rgba(218, 165, 32, 0.03) 50%, rgba(255, 255, 255, 0.02) 100%)',
        borderRadius: 16,
        pointerEvents: 'none',
        zIndex: -1
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
      <div style={{ marginBottom: 16 }}>
        <div style={{ fontWeight: 700, color: '#DAA520', fontSize: '1.1em', marginBottom: 4 }}>
          {recommendation.name}
        </div>
        <div style={{ color: '#ccc', fontSize: '0.95em', marginBottom: 4 }}>
          {recommendation.title}
        </div>
        <div style={{ color: '#888', fontSize: '0.9em' }}>
          {recommendation.date} • {recommendation.relationship}
        </div>
      </div>
      <div style={{
        lineHeight: 1.6,
        fontSize: '1.05em',
        whiteSpace: 'pre-line',
        marginBottom: shouldTruncate ? 12 : 0
      }}>
        {displayText}
      </div>
      {shouldTruncate && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          style={{
            background: 'none',
            border: 'none',
            color: '#DAA520',
            cursor: 'pointer',
            fontSize: '0.95em',
            fontWeight: 600,
            textDecoration: 'underline',
            padding: 0,
            margin: 0
          }}
        >
          {isExpanded ? 'Read less' : 'Read more'}
        </button>
      )}
      </div>
    </div>
  );
};

const RecommendationsPage = () => (
  <Main>
    <h2 style={highlight}>| RECOMMENDATIONS</h2>
    <div style={{ maxWidth: 900, margin: '0 auto', color: '#e0e0e0' }}>
      {recommendations.map((rec, idx) => (
        <RecommendationCard key={idx} recommendation={rec} />
      ))}
    </div>
  </Main>
);

export default RecommendationsPage;
