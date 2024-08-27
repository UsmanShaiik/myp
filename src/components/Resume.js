import React from 'react';

const Resume = () => (
  <div id="resume" className="resume-section">
    <h2>Resume</h2>
    <div className="job-item">
      <h4>Senior Data Analyst at Merkle</h4>
      <p>Analyzed ad campaigns, clickstream, and customer surveys data, identified an increasing demand and launched a strategic product line. Developed time series forecasting models to predict sales and optimize marketing budgets, got model performance of 92%. Designed and executed A/B tests, performed rigorous statistical analysis. Led to 20% MoM increase in the conversion rate.</p>
    </div>
    <div className="job-item">
      <h4>Senior Data Analyst at iQuanti</h4>
      <p>Performed in-depth market research and analysis to create online pages. Resulted in ~100% website growth and 30% increase in conversion rate YoY. Delivered multiple training and mentorship sessions on analytical tools like SQL, MS Excel, Power BI, Tableau and Python. Performed migration and enhancements for merchandising dashboard, involved data integration and its feature improvement.</p>
    </div>
    {/* Add more job items as needed */}
    <a href="link-to-cv.pdf" className="btn-primary">Download CV</a>
  </div>
);

export default Resume;
