import React, { useState, useEffect } from "react";
import "./HeaderHome.css";

const images = [
  require("../../assets/image1.png"),  // Ensure correct path
  require("../../assets/image2.jpg"),
  require("../../assets/image3.jpg")
];

function HeaderHome() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <header 
      className="header-home" 
      id="header-home" 
      style={{ backgroundImage: `url(${images[currentSlide]})` }}
    >
      {/* First Section - Left Aligned */}
      <div className="header-intro">
        <h2>
          Unlock the <br />
          Opportunities in the <br />
          Heart of the Middle <br />
          East
        </h2>
        <p>
          Premium advisory and business services for foreign investors and
          companies in Saudi Arabia.
        </p>
        {/* Indicator Dots */}
        <div className="indicator-dots">
          {images.map((_, index) => (
            <span key={index} className={currentSlide === index ? "dot active" : "dot"}></span>
          ))}
        </div>
      </div>

      {/* Second Section - Centered */}
      <div className="header-main">
        <h1>Semars Holding</h1>
        <p>
          Semars Holding Company is a luxury business advisory firm committed to
          assisting international companies and investors in entering and
          thriving in the Saudi Arabian market. With our expert guidance,
          tailored solutions, and deep local knowledge, we ensure your business
          success in the Kingdom.
        </p>
        <div className="header-button-container">
          <button onClick={() => (window.location.href = "mailto:info@semarsholding.com")}>
            GET A CONSULTATION
          </button>
        </div>
      </div>
    </header>
  );
}

export default HeaderHome;
