import React from 'react';
import './Services.css'; // Ensure this CSS file is created

function Services() {
  return (
    <section className="services" id="services" aria-labelledby="services-title">
      <div className="services-container">
        <h2 id="services-title">Our Services</h2>
        <p>
          At <strong>Semars Holding</strong>, we provide a comprehensive range of professional services 
          designed to support businesses and investors in navigating the Saudi market with ease.
        </p>
        <div className="services-list">
          <div className="service-item">
            <h3>Market Entry & Advisory</h3>
            <p>Helping businesses establish a strong presence in Saudi Arabia through strategic market analysis and entry strategies.</p>
          </div>
          <div className="service-item">
            <h3>Legal & Compliance</h3>
            <p>Ensuring smooth business operations by navigating complex legal frameworks and regulatory requirements.</p>
          </div>
          <div className="service-item">
            <h3>Investment Opportunities</h3>
            <p>Identifying and facilitating lucrative investment opportunities for businesses and investors.</p>
          </div>
          <div className="service-item">
            <h3>R&D Support</h3>
            <p>Providing research and development support to foster innovation and business growth.</p>
          </div>
        </div>
        <button className="primary-button">Explore More</button>
      </div>
    </section>
  );
}

export default Services;
