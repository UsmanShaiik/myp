// src/components/ServiceSection.js
import React from 'react';

const ServiceSection = () => {
  return (
    <section className="service-section" id="services">
      <div className="container">
        <h2>My Services</h2>
        <div className="services">
          <div className="service-item">
            <h3>UI/UX Design</h3>
            <p>Creating intuitive and engaging user interfaces.</p>
          </div>
          <div className="service-item">
            <h3>Web Development</h3>
            <p>Building responsive and modern websites.</p>
          </div>
          <div className="service-item">
            <h3>Java Web Applications</h3>
            <p>Building Web Applications using Java.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
