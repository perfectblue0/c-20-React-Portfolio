import React from 'react';
import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';

function Footer() {
    return (
      <footer>
        <div>
          <a href="https://github.com/perfectblue0" target="_blank" rel="noreferrer">
            <FaGithub size={50} className='icon'/>
          </a>
          <a href="https://linkedin.com/in/paola-g-lupercio/" target="_blank" rel="noreferrer">
            <FaLinkedin size={50} className='icon'/>
          </a>
          <a href="https://stackoverflow.com/users/22384896/perfectblue-000" target="_blank" rel="noreferrer">
            <FaStackOverflow size={50} className='icon'/>
          </a>
        </div>
      </footer>
    );
}

export default Footer;