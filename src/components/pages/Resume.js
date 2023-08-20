import React from "react";
import allSkills from "./resumeData";

export default function Resume() {
  const resume = require("../../assets/fake-resume.pdf");
  return (
    <div>
      <section className="resumeCont">
        <h2>My Developer Proficiencies</h2>
        <div className='bodyText resumeBody'>
          {allSkills.map((category) => (
            <div key={category.category} className="skillCont">
              <h2 className="profTitles">{category.category}</h2>
              <section>
                {category.skills.map((skill, index) => (
                  <p key={index}>
                    <strong>{skill.name}</strong>
                  </p>
                ))}
              </section>
            </div>
          ))}
        </div>
      </section>
      <div className="linkCont">
        <h2 className="downTitle">Download my resume:</h2>
        <a href={resume} download="fake-resume.pdf" className="resumeLink">
          Begin Download
        </a>
      </div>
    </div>
  );
}
