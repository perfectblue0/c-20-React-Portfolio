import React from 'react';

const Project = ({ pTitle, image, depLink, gitHLink }) => {
  const imagePath = require(`../assets/projectImages/${image}`);

  return (
    <div className="project">
      <div className="project-image-container">
        <img
          className="project-image"
          src={imagePath}
          alt={pTitle}
          onClick={() => window.open(depLink, '_blank', 'noopener noreferrer')}
          style={{ cursor: 'pointer' }}
        />
        <div className="hover-message">Click to view deployed application</div>
      </div>
      <h3 className="project-title">{pTitle}</h3>
      <div className="project-links">
        <a className="project-link" href={gitHLink} target="_blank" rel="noopener noreferrer">
          GitHub Repository
        </a>
      </div>
    </div>
  );
};

export default Project;
