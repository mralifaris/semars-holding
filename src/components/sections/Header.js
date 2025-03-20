import React from "react";
import "./Header.css";
import img from "../../assets/headerimg.png";

function Header() {
  return (
    <header className="header" id="header">
      <h1>Semars Holding</h1>
      <p>
        Semars Holding Company is a luxury business advisory firm committed to
        assisting international companies and investors in entering and thriving
        in the Saudi Arabian market. With our expert guidance, tailored
        solutions, and deep local knowledge, we ensure your business success in
        the Kingdom.
      </p>

      {/* Single Flex Container for Image + Text */}
      <div className="header-container">
        <img src={img} alt="Header" />
        <div className="text-content">
          <h2>We Are At the Center Of KSA To Offer You The Best</h2>
          <p>
            Our expertise, strong network, and deep market knowledge provide
            companies with the best opportunity to establish and grow within
            Saudi Arabia.
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
