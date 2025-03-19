import React from "react";
import { Link as ScrollLink } from "react-scroll";
import Logo from "../../assets/logo.png";
import list from "../../assets/Vector.png";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={Logo} alt="Semars Holding Logo" />
      </div>
      <ul className="navbar-links">
        <li>
          <ScrollLink to="header" smooth={true} duration={500} offset={-50}>
            Home
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="about" smooth={true} duration={500} offset={-50}>
            About Us
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="services" smooth={true} duration={500} offset={-50}>
            Services
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="industries" smooth={true} duration={500} offset={-50}>
            Industries We Serve
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="investment" smooth={true} duration={500} offset={-50}>
            Investment Opportunities
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="research" smooth={true} duration={500} offset={-50}>
            Research & Development
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="events" smooth={true} duration={500} offset={-50}>
            Events & Conferences
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="coreValues" smooth={true} duration={500} offset={-50}>
            Core Values
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="contactUs" smooth={true} duration={500} offset={-50}>
            <button className="navbar-contact">Contact</button>
          </ScrollLink>
        </li>
        <li>
          <button className="navbar-menu-button" aria-label="Toggle Menu">
            <img
              src={list}
              alt="Navigation Menu Icon"
              className="navbar-menu-icon"
            />
          </button>
        </li>
      </ul>
      <div className="navbar-line"></div>
    </nav>
  );
}

export default Navbar;
