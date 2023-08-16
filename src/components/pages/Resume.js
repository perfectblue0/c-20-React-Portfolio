import React from "react";
import allSkills from "./resumeData";

export default function Resume() {
  const resume = require("../../assets/fake-resume.pdf");
  return (
    <div>
      <section>
        <h2>My Developer Proficiencies</h2>
        <div className='bodyText'>
          {allSkills.map((category) => (
            <div key={category.category}>
              <h2>{category.category}</h2>
              <ul>
                {category.skills.map((skill, index) => (
                  <li key={index}>
                    <strong>{skill.name}</strong> - {skill.description}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <div>
        <h2>Download my resume:</h2>
        <a href={resume} download="fake-resume.pdf">
          Download Resume
        </a>
      </div>
    </div>
  );
}
