// components/ProcessSection.js
import React from 'react';
import './ProcessSection.css';

function ProcessSection() {
  return (
    <section className="process-section" id="process-section">
      <h2>Property Selection Process</h2>
      <div className="process-steps">
        <div className="step">
          <span className="step-number">01</span>
          <div className="step-content">
            <img src="https://via.placeholder.com/30" alt="Search Icon" /> {/* Replace with search icon */}
            <p>Lorem ipsum dolor sit amet</p>
          </div>
        </div>
        <div className="step">
          <span className="step-number">02</span>
          <div className="step-content">
            <img src="https://via.placeholder.com/30" alt="List Icon" /> {/* Replace with list icon */}
            <p>Selection property ipsum</p>
          </div>
        </div>
        <div className="step">
          <span className="step-number">03</span>
          <div className="step-content">
            <img src="https://via.placeholder.com/30" alt="Document Icon" /> {/* Replace with document icon */}
            <p>Dolor sit lorem</p>
          </div>
        </div>
        <div className="step">
          <span className="step-number">04</span>
          <div className="step-content">
            <img src="https://via.placeholder.com/30" alt="Building Icon" /> {/* Replace with building icon */}
            <p>Dolor sit lorem</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;