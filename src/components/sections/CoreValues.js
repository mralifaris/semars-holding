import React from 'react';
import './CoreValues.css';

const coreValuesData = [
  { title: "Integrity", imgSrc: "/assets/integrity.png", alt: "Integrity Icon" },
  { title: "Innovation", imgSrc: "/assets/innovation.png", alt: "Innovation Icon" },
  { title: "Commitment", imgSrc: "/assets/commitment.png", alt: "Commitment Icon" },
  { title: "Excellence", imgSrc: "/assets/excellence.png", alt: "Excellence Icon" },
  { title: "Expertise", imgSrc: "/assets/expertise.png", alt: "Expertise Icon" },
];

function CoreValues() {
  return (
    <section className="core-values" id="core-values" aria-labelledby="core-values-heading">
      <h2 id="core-values-heading">Our Core Values</h2>
      <div className="values-container">
        {coreValuesData.map((value, index) => (
          <article key={index} className="value-card">
            <img src={value.imgSrc} alt={value.alt} />
            <h3>{value.title}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CoreValues;
