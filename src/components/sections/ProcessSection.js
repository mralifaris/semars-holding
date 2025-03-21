// components/ProcessSection.js
import React from 'react';
import './ProcessSection.css';
import image from '../../assets/Property 1=Variant2.png'

function ProcessSection() {
  return (
    <section className="process-section" id="process-section">
      <h2>Property Selection Process</h2>
      <img src={image} alt='process section'/>      
    </section>
  );
}

export default ProcessSection;