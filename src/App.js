import React, { useEffect } from 'react';
import Preloader from './components/Preloader';
import Header from './components/Header';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServiceSection from './components/ServiceSection';
import PortfolioSection from './components/PortfolioSection';
import BlogSection from './components/BlogSection';
import AboutMeSection from './components/AboutMeSection'; 
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Notification from './components/Notification';
import './App.css';

const App = () => {

  useEffect(() => {
    const sections = document.querySelectorAll('.fade-section');
    
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fadeIn');
        } else {
          entry.target.classList.remove('fadeIn'); // Ensures the animation can be reapplied
        }
      });
    }, options);

    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="App">
      <Preloader />
      <Header />
      {/* <Notification /> */}
      <Navbar />
      
      <div className="fade-section">
        <HeroSection />
      
      </div>
      <div className="fade-section">
        <ServiceSection />
      </div>
      <div className="fade-section">
        <AboutMeSection />
      </div>
      <div className="fade-section">
        <PortfolioSection />
      </div>
      <div className="fade-section">
        <TestimonialsSection />
      </div>
      <div className="fade-section">
        <BlogSection />
      </div>
      <div className="fade-section">
        <ContactSection />
      </div>
      <Footer />
      <Notification />
    </div>
  );
};

export default App;
