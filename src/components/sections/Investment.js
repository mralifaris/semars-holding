import React from 'react';
import './Investment.css';

function Investment() {
  return (
    <section className="investment" id="investment" aria-labelledby="investment-title">
      <div className="investment-content">
        <h2 id="investment-title">Investment Opportunities</h2>
        <p>
          Semars Holding provides strategic investment opportunities across various high-growth sectors, 
          ensuring sustainable and profitable ventures for investors worldwide.
        </p>
        <ul className="investment-list">
          <li>Real Estate & Infrastructure</li>
          <li>Technology & Innovation</li>
          <li>Healthcare & Biotechnology</li>
          <li>Renewable Energy & Sustainability</li>
          <li>Manufacturing & Industrial Development</li>
          <li>Retail & E-Commerce Expansion</li>
        </ul>
        <p>
          Whether you're a private investor or a corporate entity, our team ensures tailored investment 
          solutions to maximize returns while mitigating risks.
        </p>
        <button className="primary-button">Explore Opportunities</button>
      </div>
    </section>
  );
}

export default Investment;
