import React, { useEffect, useState } from "react";
import "./Testimonials.css";
import avatar from "../../assets/avatar.png";

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Lyod Gomez",
      image: avatar,
      text: "Semars Holding provided invaluable support in expanding our business into Saudi Arabia. Their expertise and dedication made the process seamless.",
    },
    {
      id: 2,
      name: "Emma Roberts",
      image: avatar,
      text: "We were impressed with the level of professionalism and market insight from Semars Holding. Highly recommended for investment and advisory services!",
    },
    {
      id: 3,
      name: "James Anderson",
      image: avatar,
      text: "Excellent service and dedication from Semars Holding. They guided us through every step of our expansion with expert knowledge.",
    },
    {
      id: 4,
      name: "Sophia Williams",
      image: avatar,
      text: "Thanks to Semars Holding, our company successfully navigated the Saudi Arabian market. Their team is truly outstanding!",
    },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const [index, setIndex] = useState(0);

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

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 2) % testimonials.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) =>
      prevIndex - 2 < 0 ? testimonials.length - 2 : prevIndex - 2
    );
  };

  return (
    <section
      className={`testimonials ${isVisible ? "visible" : ""}`}
      id="testimonials"
      aria-labelledby="testimonials-title"
    >
      <h2 id="testimonials-title" className={isVisible ? "slide-down" : ""}>
        Testimonials
      </h2>
      <div className="testimonial-slider">
        <div className="testimonial-controls">
          <button className="prev-btn" onClick={prevSlide}>
            &#10094;
          </button>
          <button className="next-btn" onClick={nextSlide}>
            &#10095;
          </button>
        </div>
        <div className="testimonial-container">
          {testimonials.slice(index, index + 2).map((testimonial) => (
            <div
              className={`testimonial-card ${isVisible ? "slide-left" : ""}`}
              key={testimonial.id}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="testimonial-image"
              />
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
