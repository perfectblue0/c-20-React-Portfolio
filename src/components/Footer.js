import React from 'react';
import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';

function Footer() {
    return (
      <footer>
        <div>
          <a href="https://github.com/perfectblue0">
            <FaGithub size={32} />
          </a>
          <a href="https://linkedin.com/in/paola-g-lupercio/">
            <FaLinkedin size={32} />
          </a>
          <a href="https://stackoverflow.com/users/22384896/perfectblue-000">
            <FaStackOverflow size={32} />
          </a>
        </div>
      </footer>
    );
}

export default Footer;