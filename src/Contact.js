
import React from 'react';

const Contact = () => {
  return (
    <div className="contact-container">
      <header className="header">
        <h1>Contact Me</h1>
      </header>
      <section className="contact-content">
        <div className="contact-form">
          <form>
            <label htmlFor="name">Your Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Your Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Your Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
      <footer className="footer">
        <p>&copy; 2023 Your Contact Page</p>
      </footer>
    </div>
  );
};

export default Contact;