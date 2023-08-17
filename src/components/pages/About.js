import React from 'react';
import profileP from "../../assets/projectImages/profile-pic.png"
export default function About() {

  return (
    <div className='aboutBox'>
      <h2>About Me</h2>
      <img className="profile-pic" id="profilePic" alt="avatar" src={profileP} />
      <p className="bodyText">
        I am currently enrolled in UC Berkeley's Full-Stack Coding Bootcamp. To learn more about what I have been up to, check out my projects in my Portfolio. I have my Resume with information about the technologies I have learned as well. If you have any questions, get in touch with me and send me a direct message on my Contact page or send me an email to the address shared there.
      </p>
    </div>
  );
}
