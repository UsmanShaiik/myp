import React from 'react';
import './TestimonialsSection.css'; // Ensure you import your CSS file

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        <h2>Education & Projects</h2>
        <div className="education-projects">
          <div className="education">
            
            <ul>
              <li>
                <strong>GOVERNMENT HIGH SCHOOL PAKALA, Tirupati District, Andhra Pradesh</strong><br />
                CGPA in 10th Class
              </li>
              <li>
                <strong>INTERMEDIATE IN IIIT RGUKT RKVALLEY KADAPA</strong><br />
                Completed Intermediate education at IIIT RGUKT RK Valley, Kadapa.
              </li>
              <li>
                <strong>Bachelor of Technology in Electrical and Electronics Engineering</strong><br />
                Pursuing 4th year at IIIT RGUKT RK Valley, Kadapa
              </li>
            </ul>
          </div>
          <div className="projects">
          
            <ul>
              <li>
                <strong>2015-2019</strong><br />
                CGPA: 10.0
              </li>
              <li>
                <strong>2019-2021</strong><br />
                CGPA: 8.4
              </li>
              <li>
                <strong>2021-2025</strong><br />
                CGPA: 7.5
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
