import React from 'react';
import './Industries.css';

function Industries() {
  return (
    <section className="industries" id="industries" aria-labelledby="industries-title">
      <div className="industries-content">
        <h2 id="industries-title">Industries We Serve</h2>
        <p>
          Semars Holding is dedicated to supporting businesses across a variety of industries, 
          providing expert advisory and strategic solutions tailored to each sector's unique challenges.
        </p>
        <ul className="industries-list">
          <li>Finance & Investment</li>
          <li>Technology & Innovation</li>
          <li>Healthcare & Pharmaceuticals</li>
          <li>Manufacturing & Industrial</li>
          <li>Real Estate & Construction</li>
          <li>Retail & E-Commerce</li>
          <li>Energy & Sustainability</li>
        </ul>
      </div>
    </section>
  );
}

export default Industries;
