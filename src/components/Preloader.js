import React, { useEffect, useState } from 'react';
import './Preloader.css'; // Make sure this path is correct

const Preloader = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setLoaded(true);
      document.body.classList.add('loaded');
    };

    window.addEventListener('load', handleLoad); // Use 'load' event to ensure all content is loaded
    return () => window.removeEventListener('load', handleLoad);
  }, []);

  return (
    <div className={`preloader ${loaded ? 'loaded' : ''}`} data-preloader>
      <div className="circle"></div>
    </div>
  );
};

export default Preloader;
