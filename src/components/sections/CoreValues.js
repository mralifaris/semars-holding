import React, { useEffect, useState } from 'react';
import './CoreValues.css';
import integrityIcon from '../../assets/integrity.png';
import innovationIcon from '../../assets/innovation.png';
import commitmentIcon from '../../assets/commitment.png';
import excellenceIcon from '../../assets/excellence.png';
import expertiseIcon from '../../assets/expertise.png';

const coreValuesData = [
  { title: "Integrity", imgSrc: integrityIcon, alt: "Integrity Icon" },
  { title: "Innovation", imgSrc: innovationIcon, alt: "Innovation Icon" },
  { title: "Commitment", imgSrc: commitmentIcon, alt: "Commitment Icon" },
  { title: "Excellence", imgSrc: excellenceIcon, alt: "Excellence Icon" },
  { title: "Expertise", imgSrc: expertiseIcon, alt: "Expertise Icon" },
];

function CoreValues() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("core-values");
      if (section) {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight * 0.75;
        if (sectionTop < triggerPoint) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={`core-values ${isVisible ? "visible" : ""}`} id="core-values" aria-labelledby="core-values-heading">
      <h2 id="core-values-heading" className={isVisible ? "slide-down" : ""}>Our Core Values</h2>
      <div className="values-container">
        {coreValuesData.map((value, index) => (
          <article key={index} className={`value-card ${isVisible ? (index % 2 === 0 ? "slide-left" : "slide-right") : ""}`}>
            <img src={value.imgSrc} alt={value.alt} />
            <h3>{value.title}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CoreValues;
