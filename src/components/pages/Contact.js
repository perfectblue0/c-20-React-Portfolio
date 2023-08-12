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
      <div>
        <h2>Contact Form</h2>
        <form>
          <div>
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              onBlur={handleBlur}
            />
            {erName && <p className="error-message">Name is required</p>}
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              onBlur={handleBlur}
            />
            {erEmail && <p className="error-message">A valid email is required</p>}
          </div>
          <div>
            <label>Message:</label>
            <textarea
              value={message}
              onChange={handleMessageChange}
              onBlur={handleBlur}
            />
            {erMessage && <p className="error-message">Message is required</p>}
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
  
  
