import React from 'react';

export default function Resume() {
  const resume = require('../../assets/fake-resume.pdf'); 
  return (
    <div>
      <section>
        <h2>My Developer Proficiencies</h2>
        <div>
          <ul>
            
          </ul>
        </div>
      </section>
      <p>Download my resume:</p>
      <a href={resume} download="fake-resume.pdf">
        Download Resume
      </a>
    </div>
  );
}
