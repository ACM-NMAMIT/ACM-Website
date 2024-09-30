// HeroSection.jsx


import { FaCode, FaRocket, FaUsers } from 'react-icons/fa'; // Importing React Icons
import './HeroSection.css'; // Import the CSS file

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to ACM-NMAMIT</h1>
        <p className="hero-tagline">Empowering the Future of Computing</p>
        <div className="hero-buttons">
          <a href="/join" className="cta-button">Join the Club</a>
          <a href="/events" className="cta-button secondary">Upcoming Events</a>
        </div>
      </div>
      <div className="hero-icons">
        <div className="icon-card">
          <FaCode className="icon" />
          <h3>Coding Competitions</h3>
          <p>Showcase your skills and compete with the best!</p>
        </div>
        <div className="icon-card">
          <FaRocket className="icon" />
          <h3>Workshops & Seminars</h3>
          <p>Learn from industry experts and enhance your knowledge.</p>
        </div>
        <div className="icon-card">
          <FaUsers className="icon" />
          <h3>Networking Opportunities</h3>
          <p>Connect with like-minded individuals and professionals.</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
