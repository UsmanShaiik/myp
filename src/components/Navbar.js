import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleNavbar = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="navbar">
      <button className="nav-toggle-btn" onClick={toggleNavbar} aria-label="Toggle menu">
        <span className="line line-1"></span>
        <span className="line line-2"></span>
        <span className="line line-3"></span>
      </button>
      <div className={`nav-menu ${isActive ? 'active' : ''}`}>
        <a href="#hero" data-tooltip="Go to Home">Home</a>
        <a href="#services" data-tooltip="View Services">Services</a>
        <a href="#portfolio" data-tooltip="See Portfolio">Portfolio</a>
        <a href="#blog" data-tooltip="Read Blog">Blog</a>
        <a href="#contact" data-tooltip="Contact Us">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
