import React from 'react';
import { Main } from '../components/Main';
import SidebarCard from '../components/SidebarCard';

const containerStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  gap: '48px',
  margin: '40px 0'
};

const mainStyle = {
  flex: 1,
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
};

const employmentMetaStyle = {
  color: '#fff',
  fontWeight: 500,
  fontSize: '1.05rem',
  marginBottom: 2,
  display: 'flex',
  alignItems: 'center',
  gap: 8,
};

const employmentPeriodStyle = {
  color: '#fff',
  fontWeight: 400,
  fontSize: '1.05rem',
  marginLeft: 8,
};

const employmentLocationStyle = {
  color: '#888',
  fontWeight: 400,
  fontSize: '1rem',
  marginBottom: 10,
};

const employmentDescriptionStyle = {
  margin: '16px 0 0 0',
  color: '#fff',
  fontSize: '1.08rem',
  lineHeight: 1.6,
  fontWeight: 500,
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
};

const sidebarStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  minWidth: '280px',
  maxWidth: '340px'
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
    title: 'Lead Engineer',
    company: 'Docbyte',
    period: 'Jun 2024 — May 2025',
    location: 'Gent',
    description: `At Docbyte, I held the role of Lead Engineer while taking on full CTO-level responsibilities. I was accountable for technical strategy, product delivery, engineering leadership, and operational decision-making. I led cross-functional teams, managed cloud infrastructure and security practices, introduced AI-driven automation, and drove the development of entirely new SaaS products from the ground up. Operating in a highly regulated environment, I navigated strict security requirements as Docbyte is the only qualified trust service provider (QTSP) in Europe. This required a strong focus on secure system design, audit readiness, and compliance with EU trust and identity standards. To improve operational efficiency, I implemented a monitoring system using AWS CloudWatch, specifically tailored for the customer support team.`,
    badges: [
      'Angular', 'Java Spring', 'AWS Bedrock', 'AWS SageMaker', 'AWS QuickSight', 'Jira', 'Confluence', 'OpenAI', 'Claude', 'Keycloak', 'Figma', 'ngrx', 'Jest', 'RTM', 'GitHub', 'CodeCommit', 'Docker', 'REST APIs', 'AWS OCR', 'Google OCR'
    ]
  },
  {
    title: 'Management Partner & Digital Product Developer',
    company: 'The Product Architects',
    period: 'Aug 2023 — Jun 2024',
    location: 'UK (Remote)',
    description: `At The Product Architects, I led the digital product development of early-stage MVPs, working hands-on with a distributed engineering team primarily based in the UK. I was responsible for taking concepts from idea to execution, managing the full product lifecycle and ensuring high technical quality and timely delivery. I collaborated directly with cross-functional teams, aligned development objectives with business goals, and maintained tight control over timelines, requirements, and quality.`,
    badges: [
      'React', 'Next.js', 'TypeScript', 'Jira', 'Confluence', 'Figma', 'Design Thinking', 'Flutter', 'GitHub', 'REST APIs'
    ]
  },
  {
    title: 'Program Manager',
    company: 'Qualium Systems',
    period: 'Jul 2018 — Feb 2023',
    location: 'Remote',
    description: `At Qualium Systems, I led the full lifecycle of two large-scale software projects, overseeing a team of approximately 25 professionals, including 20 developers, a project manager, a 3D designer, and QA engineers. Although I didn't code myself, I was fully responsible for project leadership, technical direction, and delivery oversight, driving both early-stage prototyping with UI/UX designers to final release in close collaboration with the delivery manager. My role included requirements discovery, estimation, project planning, risk management, and stakeholder communication. I worked across both web and mobile technologies, and oversaw the integration of databases, 3D elements, and DevOps pipelines.`,
    badges: [
      'Project Management', 'Agile', 'Jira', 'Confluence', 'Docker', 'AWS', 'REST APIs'
    ]
  },
  {
    title: 'Lead (Full-Stack) Developer',
    company: 'Carl Van de Velde',
    period: 'Sep 2017 — Sep 2018',
    location: 'Sint-Niklaas',
    description: `At Carl Van de Velde, I worked as a Full Stack Developer, contributing to the design, development, and maintenance of both mobile and web applications. I developed cross-platform mobile apps for iOS and Android and using the Ionic framework in combination with AngularJS and ReactJS, ensuring a smooth and consistent user experience across devices. On the backend, I built and integrated RESTful APIs using NodeJS and MySQL, and maintained high application performance through active debugging, optimization, and troubleshooting. In addition to mobile work, I also developed a web application using the Vue.js and Laravel stack.`,
    badges: [
      'AngularJS', 'ReactJS', 'MySQL', 'Ionic', 'Laravel', 'REST APIs'
    ]
  },
  {
    title: 'Full-Stack Developer',
    company: 'Diopolis Antwerp',
    period: 'Jul 2016 — Jul 2017',
    location: 'Antwerp',
    description: `At Diopolis Antwerp, I began as a student developer and continued in a professional capacity, contributing to the development and maintenance of web applications using the MEAN stack (MongoDB, Express, Angular, Node.js). I worked on both the frontend and backend, implementing new features, optimizing performance, and integrating UI components with backend services. My responsibilities included designing and building RESTful APIs with NodeJS and MySQL, troubleshooting application issues, and ensuring reliability and scalability across systems. I gained hands-on experience working in Agile environments, using Scrum and Kanban methodologies for structured delivery.`,
    badges: [
      'MongoDB', 'Angular', 'NodeJS', 'MySQL', 'Git', 'Scrum', 'Kanban', 'REST APIs'
    ]
  },
  {
    title: 'Founder',
    company: 'Kaizen Projects',
    period: 'Jun 2016 — Present',
    location: 'Remote',
    description: `As the founder of Kaizen Projects (kaizenprojects.be), I established the company as a vehicle for delivering freelance services in digital product development, technical leadership, and product strategy. Through Kaizen, I've worked with startups and growing companies to prototype, build, and scale digital products across a variety of sectors. As a project leader, I've guided teams through strategic transformations, improved delivery workflows, implemented QA, and delivered results on time and on spec. The role has enabled me to work with truly exciting companies, always focusing on delivering real business value through well-executed technology.`,
    badges: [
      'Product Strategy', 'Freelance', 'Docker', 'REST APIs', 'Figma', 'Flutter', 'GitHub', 'Cursor', 'Windsurf', 'OpenAI APIs', 'Gemini APIs', 'Claude APIs'
    ]
  }
];

const About = () => (
  <Main>
    <div style={containerStyle}>
      {/* Main Profile Section */}
      <div style={mainStyle}>
        <h1 style={{ ...highlight, fontSize: '2.2rem', marginBottom: 24 }}>| PROFILE</h1>
        <p style={{ fontSize: '1.15rem', marginBottom: 18 }}>
          I'm an experienced tech leader with end-to-end expertise in digital product development. I specialize in transforming ideas into scalable, high-impact software products — leading cross-functional and international teams to bridge the gap between business strategy and technical execution.
        </p>
        <p style={{ fontSize: '1.15rem', marginBottom: 18 }}>
          Recently, I've prototyped and led the development of entirely new products, guiding them from concept to validation. I've defined API schemas, led frontend–backend integration, and managed quality through functional, sanity, and regression testing.
        </p>
        <p style={{ fontSize: '1.15rem', marginBottom: 40 }}>
          I actively leverage AI to drive innovation and efficiency — from training LLMs and implementing AWS Textract in production workflows to building and integrating custom AI agents. Drawing on my full-stack background, I've launched complete SaaS solutions powered by AI.
        </p>

        {/* EMPLOYMENT HISTORY */}
        <h2 style={{ ...highlight, fontSize: '1.8rem', margin: '48px 0 12px 0' }}>EMPLOYMENT HISTORY</h2>
        {employmentHistory.map((job) => (
          <div key={job.title + job.period} style={employmentCardStyle}>
            <div style={employmentTitleStyle}>{job.title}</div>
            <div style={employmentMetaStyle}>
              {job.company} <span style={{ color: '#DAA520' }}>•</span> <span style={employmentPeriodStyle}>{job.period}</span>
            </div>
            <div style={employmentLocationStyle}>{job.location}</div>
            <div style={employmentDescriptionStyle}>{job.description}</div>
            <div style={{ marginTop: 12, display: 'flex', flexWrap: 'wrap' }}>
              {job.badges.map(badge => (
                <span key={badge} style={badgeStyle}>{badge}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* Sidebar Section */}
      <div style={sidebarStyle}>
        <SidebarCard title='PERSONAL INFO'>
          <div style={{ marginBottom: 8 }}><span style={valueStyle}>14/01/1992, Rudny</span></div>
          <div style={{ marginBottom: 8 }}><span style={valueStyle}>Brasschaat, Belgium</span></div>
          <div style={{ marginBottom: 8 }}><span style={valueStyle}>+32499785394</span></div>
          <div><span style={labelStyle}>✉️</span><span style={valueStyle}>contact@kaizenprojects.be</span></div>
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
        <SidebarCard title='CERTIFICATIONS'>
          <div style={valueStyle}>Behavioral Design Fundamentals</div>
          <div style={valueStyle}>Prince2 Certified</div>
          <div style={valueStyle}>CEHv9 - Ethical Hacking</div>
        </SidebarCard>
        <SidebarCard title='ONGOING CERTIFICATIONS'>
          <div style={{ ...valueStyle, display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ color: '#DAA520', fontSize: '1.2em', transition: 'text-shadow 0.2s', cursor: 'pointer' }}>•</span> Digital MBA - CTO Academy
          </div>
          <div style={{ ...valueStyle, display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ color: '#DAA520', fontSize: '1.2em', transition: 'text-shadow 0.2s', cursor: 'pointer' }}>•</span> PMC Certification
          </div>
        </SidebarCard>
        <SidebarCard title='COMMUNITIES'>
          <div style={valueStyle}>• CTO Club Belgium</div>
          <div style={valueStyle}>• CTO Academy</div>
        </SidebarCard>
      </div>
    </div>
  </Main>
);

export default About;
