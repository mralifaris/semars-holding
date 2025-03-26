import React, { useState, useEffect } from "react";
import "./HeaderHome.css";

const images = [
  require("../../assets/image1.png"),
  require("../../assets/image2.jpg"),
  require("../../assets/image3.jpg"),
];

function HeaderHome() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="header-home">
      <div className="slider-container">
        {images.map((img, index) => (
          <div
            key={index}
            className={`slide ${currentSlide === index ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})`, transform: `translateX(${(index - currentSlide) * 100}%)` }}
          ></div>
        ))}
      </div>
      <div className="header-content">
        <div className="header-intro">
          <h2>
            Unlock the <br /> Opportunities in the <br /> Heart of the Middle <br /> East
          </h2>
          <p>
            Premium advisory and business services for foreign investors and
            companies in Saudi Arabia.
          </p>
          <div className="indicator-container">
            {images.map((_, index) => (
              <span key={index} className={`indicator-line ${currentSlide === index ? "active" : ""}`}></span>
            ))}
          </div>
        </div>
        <div className="header-main">
          <h1>Semars Holding</h1>
          <p>
            Semars Holding Company is a luxury business advisory firm committed to
            assisting international companies and investors in entering and
            thriving in the Saudi Arabian market.
          </p>
          <div className="header-button-container">
            <button onClick={() => (window.location.href = "mailto:info@semarsholding.com")}>GET A CONSULTATION</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderHome;
