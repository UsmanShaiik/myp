import React, { useState } from 'react';
import './PortfolioSection.css'; // Ensure you import your CSS file

const projects = [
  {
    title: "Responsive Web Design Showcase",
    description: "Created a series of visually engaging and responsive web designs, ensuring optimal performance across various devices and screen sizes.",
  },
  {
    title: "Web Applications",
    description: "Developed interactive and user-friendly web applications that cater to diverse business needs, incorporating modern frameworks and technologies.",
  },
  {
    title: "Bootstrap Projects",
    description: "Built dynamic and responsive websites using Bootstrap, enhancing user experience with a mobile-first approach and sleek design elements.",
  },
  {
    title: "Chatbot AI using JavaScript",
    description: "Developed an intelligent chatbot using JavaScript, implementing rule-based responses and natural language processing to engage users effectively.",
  },
  {
    title: "Chatting Application using JavaScript",
    description: "Created a real-time chatting application using JavaScript, featuring user authentication, chat rooms, and a responsive UI for seamless communication.",
  },
  {
    title: "Shopping Website using React.js",
    description: "Designed and developed a modern shopping website with React.js, integrating e-commerce features like product listings, cart functionality, and payment processing.",
  },
  {
    title: "Job Finder Website",
    description: "Built a job search platform that allows users to search for job listings, apply filters, and view job details. Implemented features like user profiles and application tracking.",
  }
];

const PortfolioSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="portfolio-section" id="portfolio">
      <div className="container">
        <h2>My Projects</h2>
        <div className="portfolio-slider">
          <div className="portfolio-item">
            <h3>{projects[currentIndex].title}</h3>
            <p>{projects[currentIndex].description}</p>
          </div>
          <button className="slider-button left" onClick={handlePrev}>&#10094;</button>
          <button className="slider-button right" onClick={handleNext}>&#10095;</button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
