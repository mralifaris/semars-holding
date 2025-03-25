import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaTwitter,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll"; // For same-page scrolling
import { Link } from "react-router-dom"; // For navigation to other pages
import Logo from "../../assets/logo.png";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={Logo} alt="Semars Holding Logo" />
      </div>
      <div className="footer-container">
        <div className="footer-section">
          <h3>Home</h3>
          <ul>
            <li>
              <Link to="/about-us">About Us</Link> {/* Fixed */}
            </li>
            <li>
              <ScrollLink to="services" smooth={true} duration={500}>
                Services
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="industries" smooth={true} duration={500}>
                Industries We Serve
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="investment" smooth={true} duration={500}>
                Investment Opportunities
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="research" smooth={true} duration={500}>
                Research and Development
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="events" smooth={true} duration={500}>
                Events and Conferences
              </ScrollLink>
            </li>
          </ul>
        </div>

        {/* Services Section */}
        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li>
              <ScrollLink to="services" smooth={true} duration={500}>
                Market Entry & Advisory
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="services" smooth={true} duration={500}>
                Legal & Compliance
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="investment" smooth={true} duration={500}>
                Investment Opportunities
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="research" smooth={true} duration={500}>
                R&D Support
              </ScrollLink>
            </li>
          </ul>
        </div>

        {/* Help Section */}
        <div className="footer-section">
          <h3>Help</h3>
          <ul>
            <li>
              <ScrollLink to="terms" smooth={true} duration={500}>
                Terms of Use
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="privacy" smooth={true} duration={500}>
                Privacy Policy
              </ScrollLink>
            </li>
          </ul>
        </div>

        {/* Contacts Section */}
        <div className="footer-section footer-section-contacts">
          <h3>Contacts</h3>
          <ul>
            <li>
              <FaMapMarkerAlt className="icon contact-icon" />
              <span>Jeddah, Kingdom of Saudi Arabia</span>
            </li>
            <li>
              <FaPhoneAlt className="icon contact-icon" />
              <span>+966 (Insert Number)</span>
            </li>
            <li>
              <FaEnvelope className="icon contact-icon" />
              <a href="mailto:info@semarsholding.com">info@semarsholding.com</a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer-section-social">
          <h3>Social Media</h3>
          <ul>
            <li>
              <a
                className="socials"
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="icon" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="icon" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© 2024. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
