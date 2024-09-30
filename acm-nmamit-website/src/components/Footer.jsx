import './Footer.css'; // Import the CSS file
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Importing React Icons
import acmLogo from '../assets/ACMLogo.png';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={acmLogo} alt="ACM Logo" />
        </div>
        <ul className="footer-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/events">Events</a></li>
          <li><a href="/core-members">Core Members</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        <div className="footer-socials">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} ACM-NMAMIT. All Rights Reserved.</p>
        <div className="footer-info">
          <p>Join us in empowering the future of computing!</p>
          <p>Contact us: <a href="mailto:info@acm-nmamit.org">info@acm-nmamit.org</a></p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
