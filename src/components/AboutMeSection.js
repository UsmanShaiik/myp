// src/components/About.js
import React from 'react';
import './About.css'; // Ensure you import your CSS file for styling

const About = () => (
  <div id="about" className="about-section">
    <h2>About Me</h2>
    
    <div className="personal-info">
      <p><strong>Name:</strong> Shaik Mohammad Usman</p>
      <p><strong>Job Role:</strong>Web Developer</p>
      <p><strong>Experience:</strong>Fresher</p>
      <p><strong>Address:</strong> Kadapa, India</p>
    </div>
    
    <div className="about-me">
      <h3>About Me</h3>
      <p> Electrical Engineering student with expertise in software development and industrial applications. Proficient
 in HTML, CSS, JavaScript, React, Bootstrap, Node.js, Big Data, and Java. Seeking roles in Backend and
 Frontend Development to leverage skills in Python, Node.js, React.js, and Flutter. Passionate about utilizing
 AI technologies to drive transformative solutions in a dynamic and collaborative environment</p>
    </div>
    
    <div className="profile">
    
      <p><strong>Domain:</strong> Web Developer,Backend Developer,Java Developer</p>
      <p><strong>Education:</strong> Bachelor of Engineering</p>
      <p><strong>Language:</strong> English, Hindi ,Telugu , Urdu</p>
      <p><strong>Skills:</strong> HTML, CSS, Bootstrap, JavaScript, React.js, Node.js, SQL, Java, Bigdata, IoT, Verilog, Python, AI</p>
      <p><strong>Other Skills:</strong> Communication,Conceptual Understanding, Problem Solving, Self-learning, Presentation, Adaptabilit</p>
      <p><strong>Interest:</strong> Traveling, Travel Photography</p>
      <p><strong>Projects Completed:</strong> 25+</p>
    </div>
    
    <div className="skills">
      <h3>Skills</h3>
      <div className="skill">
        <h4>SQL</h4>
        <div className="skill-bar">
          <div className="progress" style={{ '--skill-level': '95%' }}></div>
        </div>
      </div>
      <div className="skill">
        <h4>Java</h4>
        <div className="skill-bar">
          <div className="progress" style={{ '--skill-level': '85%' }}></div>
        </div>
      </div>
      <div className="skill">
        <h4>Web Developement</h4>
        <div className="skill-bar">
          <div className="progress" style={{ '--skill-level': '95%' }}></div>
        </div>
      </div>
      <div className="skill">
        <h4>Big Data Analytics</h4>
        <div className="skill-bar">
          <div className="progress" style={{ '--skill-level': '70%' }}></div>
        </div>
      </div>
      <div className="skill">
        <h4>Artificial Intelligence</h4>
        <div className="skill-bar">
          <div className="progress" style={{ '--skill-level': '80%' }}></div>
        </div>
      </div>
    </div>
  </div>
);

export default About; // Ensure the export name matches the component name
