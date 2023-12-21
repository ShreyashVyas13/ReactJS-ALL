// PortfolioPage.js

import React from 'react';

const Home = () => {
  return (
    <div className="portfolio-container">
      <header className="header">
        <h1>Your Name</h1>
        <p>Web Developer & Designer</p>
      </header>
      <section className="about-me">
        <h2>About Me</h2>
        <p>
          Welcome to my portfolio! I am a passionate web developer and designer
          with expertise in creating beautiful and functional websites.
        </p>
      </section>
      <section className="projects">
        <h2>Projects</h2>
        <div className="project">
          <h3>Project 1</h3>
          <p>
            Description of your project. You can add details about technologies
            used, your role, and the impact of the project.
          </p>
        </div>
        <div className="project">
          <h3>Project 2</h3>
          <p>
            Another project description. Highlight your achievements and
            showcase your skills.
          </p>
        </div>
        {/* Add more projects as needed */}
      </section>
      <section className="contact">
        <h2>Contact Me</h2>
        <p>
          I am open to new opportunities and collaborations. Feel free to reach
          out to me!
        </p>
        <div className="contact-form">
          {/* Add a contact form here */}
          <form>
            {/* Form fields go here */}
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
      <footer className="footer">
        <p>&copy; 2023 Your Portfolio</p>
      </footer>
    </div>
  );
};

export default Home;
