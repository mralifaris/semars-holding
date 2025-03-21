import React, { useEffect, useState } from 'react';
import './Testimonials.css';
import avatar from '../../assets/avatar.png';

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Lyod Gomez',
      image: avatar, 
      text: 'Semars Holding provided invaluable support in expanding our business into Saudi Arabia. Their expertise and dedication made the process seamless.',
    },
    {
      id: 2,
      name: 'Emma Roberts',
      image: avatar, 
      text: 'We were impressed with the level of professionalism and market insight from Semars Holding. Highly recommended for investment and advisory services!',
    },
  ];

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("testimonials");
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
    <section className={`testimonials ${isVisible ? "visible" : ""}`} id="testimonials" aria-labelledby="testimonials-title">
      <h2 id="testimonials-title" className={isVisible ? "slide-down" : ""}>Testimonials</h2>
      <div className="testimonial-container">
        {testimonials.map((testimonial, index) => (
          <div 
            className={`testimonial-card ${isVisible ? "slide-left" : ""}`} 
            key={testimonial.id}
            style={{ transitionDelay: `${index * 0.2}s` }}
          >
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <div className="testimonial-content">
              <h3 className="testimonial-name">{testimonial.name}</h3>
              <p className="testimonial-text">"{testimonial.text}"</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
