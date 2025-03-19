import React from 'react';
import './Research.css';

function Research() {
  return (
    <section className="research" id="research" aria-labelledby="research-title">
      <div className="research-content">
        <h2 id="research-title">Research and Development</h2>
        <p>
          At **Semars Holding**, we drive **innovation and excellence** through cutting-edge research 
          and development (R&D). Our focus is on creating **sustainable solutions** that foster growth 
          across multiple industries.
        </p>
        <h3>Our Key Areas of Research</h3>
        <ul className="research-list">
          <li>Technology & Digital Transformation</li>
          <li>Renewable Energy & Sustainability</li>
          <li>Healthcare & Biotech Innovations</li>
          <li>Artificial Intelligence & Automation</li>
          <li>Market & Business Strategy Research</li>
        </ul>
        <p>
          Our R&D initiatives empower businesses to **stay ahead of the competition**, leveraging 
          **data-driven insights** and **emerging technologies** to shape the future.
        </p>
        <button className="primary-button">Learn More</button>
      </div>
    </section>
  );
}

export default Research;
