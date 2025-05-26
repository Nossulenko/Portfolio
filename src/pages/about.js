import React from 'react';
import { Main } from '../components/Main';
import SidebarCard from '../components/SidebarCard';

const sidebarStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  minWidth: '280px',
  maxWidth: '340px'
};

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
  fontWeight: 500,
  transition: 'text-shadow 0.2s',
  '&:hover': {
    textShadow: '0 0 5px #DAA520'
  }
};

const labelStyle = {
  ...highlight,
  '&:hover': {
    textShadow: '0 0 5px #DAA520'
  }
};

const valueStyle = { color: '#fff', fontWeight: 400 };
const nativeStyle = {
  ...highlight,
  marginLeft: 8,
  fontSize: '0.95em',
  '&:hover': {
    textShadow: '0 0 5px #DAA520'
  }
};

const About = () => (
  <Main>
    <div style={containerStyle}>
      {/* Main Profile Section */}
      <div style={mainStyle}>
        <h1
          style={{ ...highlight, fontWeight: 700, letterSpacing: 2, marginBottom: 24, fontSize: '2.2rem', cursor: 'pointer' }}
        >| PROFILE</h1>
        <p style={{ fontSize: '1.15rem', marginBottom: 18, color: '#fff' }}>
          I'm an experienced tech leader with end-to-end expertise in digital product development. I specialize in transforming ideas into scalable, high-impact software products — leading cross-functional and international teams to bridge the gap between business strategy and technical execution.
        </p>
        <p style={{ fontSize: '1.15rem', marginBottom: 18, color: '#fff' }}>
          Recently, I've prototyped and led the development of entirely new products, guiding them from concept to validation. I've defined API schemas, led frontend–backend integration, and managed quality through functional, sanity, and regression testing.
        </p>
        <p style={{ fontSize: '1.15rem', color: '#fff' }}>
          I actively leverage AI to drive innovation and efficiency — from training LLMs and implementing AWS Textract in production workflows to building and integrating custom AI agents. Drawing on my full-stack background, I've launched complete SaaS solutions powered by AI.
        </p>
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
