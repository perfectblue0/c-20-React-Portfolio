import React from 'react';

export default function Contact() {
  return (
    <div>
      <h1>Contact Me</h1>
      <div>
        <form>
          <label>Name</label>
          <input
          type="text" 
          placeholder='Please write your name'
          />
          <label>Email</label>
          <input
          type="email"
          placeholder='Please write you email address' 
          />
          <label>Message</label>
          <input
          type="textarea"
          placeholder='Write your message here'
          />
          <button type="button">Submit</button>
        </form>
      </div>
    </div>
  );
}
