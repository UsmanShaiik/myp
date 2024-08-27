import React from 'react';
import './HeroSection.css'; // Ensure you import your CSS file

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <h1>
        H͏E͏L͏L͏O͏!    <br />
        I͏'m͏ U͏s͏m͏a͏n͏ S͏h͏a͏i͏k͏ <br />
        S͏t͏u͏d͏e͏n͏t͏<br />
        W͏e͏b͏ D͏e͏v͏e͏l͏o͏p͏e͏r͏
        </h1>
        <p>Explore my work and projects</p>
        <a href="#contact" className="btn-primary">Click Here!</a>
      </div>
    </section>
  );
};

export default HeroSection;
