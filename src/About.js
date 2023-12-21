// AboutPage.js

import React from 'react';

const About = () => {
  return (
    <div className="about-container">
      <header className="header">
        <h1>About Me</h1>
      </header>
      <section className="about-content">
        <img
          src="https://placekitten.com/200/200" // Replace with your photo
          alt="Your Name"
          className="profile-image"
        />
        <p>
          Hello! I'm Your Name, a passionate web developer and designer based
          in [Your Location]. I specialize in creating modern and responsive web
          applications that deliver a great user experience.
        </p>
        <p>
          My journey in web development started [mention your background]. Over
          the years, I have gained experience in [list your skills, technologies
          you've worked with].
        </p>
        <p>
          When I'm not coding, you can find me [mention your hobbies or
          interests]. I believe in continuous learning and staying updated
          about the latest trends in web development.
        </p>
      </section>
      <footer className="footer">
        <p>&copy; 2023 Your About Me Page</p>
      </footer>
    </div>
  );
};

export default About;
