import React from 'react';
import { Link } from 'react-router-dom';
import './styles/under-construction.css';

const UnderConstruction = () => {
  return (
    <div className="under-construction">
      <div className="construction-content">
        <div className="construction-icon">🚧</div>
        <h1>Welcome to Nikolai's Portfolio</h1>
        <p>We're currently building something amazing for you!</p>
        <p className="construction-subtitle">
          This website is under construction and will be available very soon.
        </p>
        <div className="construction-links">
          <a href="mailto:nikolai@example.com" className="contact-btn">
            Contact Me
          </a>
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="linkedin-btn">
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;
