// src/components/Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faSkype, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'; // Ensure you import your CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <ul className="footer-list">
          <li>
            <h4>Usman Shaik</h4>
            <a href="mailto:usmanshaiik59@gmail.com" className="footer-link">usmanshaiik59@gmail.com</a>
          </li>
          <li>
            <h4>Location</h4>
            <p>KADAPA, IIIT RGUKT RK VALLEY</p>
          </li>
        </ul>
        <ul className="social-list">
          <li><a href="#" className="social-link"><FontAwesomeIcon icon={faFacebookF} /></a></li>
          <li><a href="#" className="social-link"><FontAwesomeIcon icon={faTwitter} /></a></li>
          <li><a href="#" className="social-link"><FontAwesomeIcon icon={faSkype} /></a></li>
          <li><a href="#" className="social-link"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
