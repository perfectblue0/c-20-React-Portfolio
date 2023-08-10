import React from 'react';

const Project = ({ pTitle, image, depLink, gitHLink }) => {
  
    const imagePath = require(`../assets/projectImages/${image}`);

    return (
        <div className="project">
            <img className="project-image" src={imagePath} alt={pTitle} />
            <h3 className="project-title">{pTitle}</h3>
            <div className="project-links">
            <a className="project-link" href={depLink} target="_blank" rel="noopener noreferrer">
            Deployed Link
            </a>
            <a className="project-link" href={gitHLink} target="_blank" rel="noopener noreferrer">
            GitHub Repository
            </a>
        </div>
    </div>
  );
};

export default Project;