import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaTwitter,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-scroll";
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
              <Link to="about" smooth={true} duration={500}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="services" smooth={true} duration={500}>
                Services
              </Link>
            </li>
            <li>
              <Link to="industries" smooth={true} duration={500}>
                Industries We Serve
              </Link>
            </li>
            <li>
              <Link to="investment" smooth={true} duration={500}>
                Investment Opportunities
              </Link>
            </li>
            <li>
              <Link to="research" smooth={true} duration={500}>
                Research and Development
              </Link>
            </li>
            <li>
              <Link to="events" smooth={true} duration={500}>
                Events and Conferences
              </Link>
            </li>
          </ul>
        </div>

        {/* Services Section */}
        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li>
              <Link to="services" smooth={true} duration={500}>
                Market Entry & Advisory
              </Link>
            </li>
            <li>
              <Link to="services" smooth={true} duration={500}>
                Legal & Compliance
              </Link>
            </li>
            <li>
              <Link to="investment" smooth={true} duration={500}>
                Investment Opportunities
              </Link>
            </li>
            <li>
              <Link to="research" smooth={true} duration={500}>
                R&D Support
              </Link>
            </li>
          </ul>
        </div>

        {/* Help Section */}
        <div className="footer-section">
          <h3>Help</h3>
          <ul>
            <li>
              <Link to="terms" smooth={true} duration={500}>
                Terms of Use
              </Link>
            </li>
            <li>
              <Link to="privacy" smooth={true} duration={500}>
                Privacy Policy
              </Link>
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
