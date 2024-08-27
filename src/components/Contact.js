import React from 'react';

const Contact = () => (
  <div id="contact" className="contact-section">
    <h2>Contact</h2>
    <form>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" />
      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message"></textarea>
      <button type="submit">Send</button>
    </form>
  </div>
);

export default Contact;
