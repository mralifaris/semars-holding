import React from 'react';
import './Testimonials.css';

function Testimonials() {
  // Dummy testimonial data (replace with real data)
  const testimonials = [
    {
      id: 1,
      name: 'Lyod Gomez',
      // image: 'https://via.placeholder.com/100', // Replace with actual image
      text: 'Semars Holding provided invaluable support in expanding our business into Saudi Arabia. Their expertise and dedication made the process seamless.',
    },
    {
      id: 2,
      name: 'Emma Roberts',
      // image: 'https://via.placeholder.com/100', // Replace with actual image
      text: 'We were impressed with the level of professionalism and market insight from Semars Holding. Highly recommended for investment and advisory services!',
    },
  ];

  return (
    <section className="testimonials" id="testimonials" aria-labelledby="testimonials-title">
      <div className="testimonials-container">
        <h2 id="testimonials-title">What Our Clients Say</h2>
        <div className="testimonial-list">
          {testimonials.map((testimonial) => (
            <div className="testimonial-card" key={testimonial.id}>
              {/* <img src={testimonial.image} alt={`Photo of ${testimonial.name}`} className="testimonial-image" /> */}
              <div className="testimonial-content">
                <h3 className="testimonial-name">{testimonial.name}</h3>
                <p className="testimonial-text">"{testimonial.text}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
