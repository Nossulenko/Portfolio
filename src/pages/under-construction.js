import React from 'react';
import { Link } from 'react-router-dom';
import './styles/under-construction.css';

const UnderConstruction = () => {
  return (
    <div className="under-construction">
      <div className="construction-content">
        <div className="construction-icon">🚧</div>
        <h1>Under Construction</h1>
        <p>We're working hard to bring you something amazing!</p>
        <p className="construction-subtitle">
          This page is currently being built and will be available soon.
        </p>
        <Link to="/" className="back-home-btn">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default UnderConstruction;
