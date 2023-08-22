import React, { useState } from 'react';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [erName, setNameE] = useState(false);
    const [erEmail, setEmailE] = useState(false);
    const [erMessage, setMessageE] = useState(false);

    const emailVal = (email) => {
      const patEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return patEmail.test(email);
    };
  
    const handleNameChange = (event) => {
      setName(event.target.value);
      setNameE(false);
    };
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
      setEmailE(!emailVal(event.target.value));
    };
  
    const handleMessageChange = (event) => {
      setMessage(event.target.value);
      setMessageE(false);
    };
  
    const handleBlur = () => {
      if (!name) {
        setNameE(true);
      }
      if (!email) {
        setEmailE(true);
      }
      if (!message) {
        setMessageE(true);
      }
    };
  
    return (
      <div className='contactCont'>
        <h2 className='extraYellow'>Contact Form</h2>
        <form className='bodyText'>
          <div className='clientIn'>
            <label>Name:</label>
            <input
              type="text"
              placeholder="name"
              value={name}
              onChange={handleNameChange}
              onBlur={handleBlur}
            />
            {erName && <span className="error-message">Name is required</span>}
          </div>
          <div className='clientIn'>
            <label>Email:</label>
            <input
              type="email"
              placeholder="email"
              value={email}
              onChange={handleEmailChange}
              onBlur={handleBlur}
            />
            {erEmail && <span className="error-message">A valid email is required</span>}
          </div>
          <div className='clientIn'>
            <label>Message:</label>
            <textarea
              placeholder="type your message here"
              value={message}
              onChange={handleMessageChange}
              onBlur={handleBlur}
            />
            {erMessage && <span className="error-message">Message is required</span>}
          </div>
          <button type="submit" className="contButton">Submit</button>
          <h3>Or email me at: <span className="myEmail">fakeemail@mail.com</span></h3>
        </form>
      </div>
    );
  }
  
  
