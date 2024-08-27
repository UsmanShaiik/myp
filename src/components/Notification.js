import React, { useState } from 'react';

const NotificationIcon = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <div 
      className="notification-icon"
      style={{
        position: 'fixed', // Ensures the icon stays fixed in the viewport
        top: '10px', // Adjust the distance from the top
        right: '10px', // Adjust the distance from the right
        zIndex: 1000, // Ensures it is above other content
        cursor: 'pointer'
      }}
    >
      <i 
        className="fa fa-bell" 
        onClick={togglePopup}
        style={{
          fontSize: '24px',
          color: '#333',
        }}
      ></i>
      <div 
        className={`notification-popup ${isPopupVisible ? 'active' : ''}`}
        style={{
          display: isPopupVisible ? 'block' : 'none',
          position: 'absolute',
          top: '30px',
          right: '0',
          backgroundColor: 'white',
          border: '1px solid #ddd',
          padding: '10px',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
          width: '200px',
          zIndex: 1001, // Ensures the pop-up is above the icon
        }}
      >
        <p>Update 1: Currently Creating a new MultiPortal Website</p>
        <p>Update 2: Resume Updated</p>
        {/* Add more updates as needed */}
      </div>
    </div>
  );
};

export default NotificationIcon;
