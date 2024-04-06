import React from 'react';
import emailjs from '@emailjs/browser';
import './Form.css';

function Form() {
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_h4va99j', 'template_wdu7dkz', e.target, 'WqKQSWK6JJAgc_wWF')
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        alert('Message sent successfully!');
        e.target.reset(); // Reset the form
      }, (error) => {
        console.error('Error sending email:', error.text);
        alert('An error occurred while sending the message. Please try again later.');
      });
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>Your name</label>
        <input type='text' name="from_name" required />
        <label>Email</label>
        <input type='email' name="reply_to" required />
        <label>Subject</label>
        <input type='text' name="subject" required />
        <label>Message</label>
        <textarea rows="6" name="message" placeholder='Enter your message here' required />
        <button type="submit" className='btn'>Submit</button>
      </form>
    </div>
  );
}

export default Form;
