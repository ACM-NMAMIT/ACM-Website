// AboutUsPage.jsx


import { FaRocket, FaUsers, FaGraduationCap, FaRegLightbulb } from 'react-icons/fa'; // Import relevant icons
import './AboutUsPage.css'; // Import the CSS file

const AboutUsPage = () => {
  return (
    <div className="about-us-container">
      <header className="about-us-header">
        <h1>About NMAMIT ACM Student Chapter</h1>
        <p>
          The NMAMIT ACM Student Chapter is a dedicated group of passionate students 
          from the Computer Science, Information Science, and MCA departments. Our goal 
          is to promote computing as a science and profession, and to create a community 
          where students can collaborate, learn, and grow together.
        </p>
      </header>

      <section className="mission-vision">
        <h2>Our Mission</h2>
        <p>
          To provide resources and opportunities for students to enhance their knowledge 
          and skills in computing through workshops, seminars, and collaborative projects.
        </p>

        <h2>Our Vision</h2>
        <p>
          To foster a culture of innovation and creativity among students, preparing them 
          for a successful career in technology.
        </p>
      </section>

      <section className="core-values">
        <h2>Core Values</h2>
        <div className="values-cards">
          <div className="value-card">
            <FaRocket className="value-icon" />
            <h3>Innovation</h3>
            <p>
              We embrace creativity and encourage new ideas that push the boundaries 
              of technology.
            </p>
          </div>
          <div className="value-card">
            <FaUsers className="value-icon" />
            <h3>Collaboration</h3>
            <p>
              We believe in the power of teamwork and foster a supportive environment 
              for our members.
            </p>
          </div>
          <div className="value-card">
            <FaGraduationCap className="value-icon" />
            <h3>Learning</h3>
            <p>
              We prioritize continuous learning and strive to provide educational 
              resources for our members.
            </p>
          </div>
          <div className="value-card">
            <FaRegLightbulb className="value-icon" />
            <h3>Excellence</h3>
            <p>
              We aim for excellence in all our endeavors, encouraging our members 
              to strive for greatness.
            </p>
          </div>
        </div>
      </section>

      <section className="get-involved">
        <h2>Get Involved</h2>
        <p>
          Join us in our mission to advance computing knowledge and skills. 
          Participate in our events and become a part of our vibrant community!
        </p>
        <button className="join-button">Join Us</button>
      </section>
    </div>
  );
};

export default AboutUsPage;
