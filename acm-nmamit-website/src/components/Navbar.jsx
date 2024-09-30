// Navbar.jsx

import { useState } from 'react';
import './Navbar.css'; // Import the CSS file
import acmLogo from '../assets/ACMLogo.png'; // Adjust the path based on your project structure

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      <div className="logo">
        <img src={acmLogo} alt="ACM Logo" />
      </div>
      <button className="burger" onClick={toggleMenu}>
        <span className={`bar ${isOpen ? 'change' : ''}`}></span>
        <span className={`bar ${isOpen ? 'change' : ''}`}></span>
        <span className={`bar ${isOpen ? 'change' : ''}`}></span>
      </button>
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/events">Events</a></li>
        <li><a href="/core-members">Core Members</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
