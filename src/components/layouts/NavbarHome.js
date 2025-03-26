import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { FaList, FaSearch } from "react-icons/fa"; // Import icons
import Logo from "../../assets/logo.png";
import "./NavbarHome.css";

function NavbarHome() {
  const navigate = useNavigate(); // React Router navigation

  return (
    <nav className="navbarhome">
      {/* Menu Button */}
      <button className="navbarhome-menu-button" aria-label="Toggle Menu">
        <FaList className="list-icon" />
      </button>

      {/* Logo - Clickable to go Home */}
      <div className="navbarhome-logo" onClick={() => navigate("/")}>
        <img src={Logo} alt="Semars Holding Logo" />
      </div>

      {/* Navigation Links */}
      <ul className="navbarhome-links">
        <li>
          <Link to="/" onClick={() => navigate("/")}>Home</Link>
        </li>
        <li>
          <Link to="/about-us" onClick={() => navigate("/about-us")}>About Us</Link>
        </li>
        <li>
          <ScrollLink to="services" smooth={true} duration={500} offset={-50}>
            Services
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
          <ScrollLink to="contactUs" smooth={true} duration={500} offset={-50}>
            <button className="navbar-contact">Contact</button>
          </ScrollLink>
        </li>
        <li>
          <button className="searchbutton">
            <FaSearch className="search-icon" /> {/* Search Icon */}
          </button>
        </li>
      </ul>

      <div className="navbarhome-line"></div>
    </nav>
  );
}

export default NavbarHome;
