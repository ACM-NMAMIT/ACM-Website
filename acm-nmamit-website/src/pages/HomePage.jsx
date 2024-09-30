
import { FaStar, FaUsers, FaClipboardList, FaLightbulb } from 'react-icons/fa'; // Import relevant icons
import './HomePage.css'; // Import the CSS file

const HomePage = () => {
  return (
    <div className="homepage-container">
      <header className="hero-section">
        <h1>Welcome to NMAMIT ACM Student Chapter</h1>
        <p>
          ACM, the worlds largest educational and scientific computing society,
          delivers resources that advance computing as a science and a profession. 
          NMAMIT ACM Student Chapter was chartered in May 2015. Since then, many 
          technical events have been conducted. We, as a team of ACM Student 
          Chapter members, which includes CSE, ISE & MCA departments, work towards 
          the fulfillment of the vision of ACM.
        </p>
        <button className="explore-button">Explore More</button>
      </header>
      
      <section className="program-section">
        <h2>Our Programs</h2>
        <div className="programs-cards">
          <div className="program-card">
            <FaClipboardList className="program-icon" />
            <h3>Organizing Events</h3>
            <p>
              Organizing various ACM events effectively and efficiently and giving 
              wide publicity to all the events.
            </p>
          </div>
          <div className="program-card">
            <FaLightbulb className="program-icon" />
            <h3>Creativity & Design</h3>
            <p>
              Planning for new creative and innovative ACM events and designing 
              event posters, brochures, etc.
            </p>
          </div>
          <div className="program-card">
            <FaStar className="program-icon" />
            <h3>Technical</h3>
            <p>
              Preparing contents for various Technical Events, evaluation and 
              formulating various Special Interest Groups (SIG).
            </p>
          </div>
          <div className="program-card">
            <FaUsers className="program-icon" />
            <h3>Documentation</h3>
            <p>
              Taking photographs of various events and preparing documents/reports.
            </p>
          </div>
        </div>
      </section>

      <section className="about-nmam">
        <h2>About NMAMIT</h2>
        <p>
          Nitte Mahalinga Adyanthaya Memorial Institute of Technology (NMAMIT) 
          was established in the year 1986 under Nitte Education Trust, 
          Mangalore. The institute is AICTE approved, NBA & NAAC Accredited, 
          ISO 9001:2008 Certified, Autonomous and affiliated to Visveswaraya 
          Technological University, Belgavi. At present, the institute offers 
          7 UG, 10 PG and PhD programmes. The institute has been recognized 
          as a Lead Institute under World Bank Funding (TEQIP). The institute 
          is also a Nodal Centre of National Board of Accreditation (NBA) 
          to impart training programmes in Outcome Based Education and 
          Accreditation.
        </p>
      </section>

      <section className="call-to-action">
        <h2>Get Involved!</h2>
        <p>Join us in our mission to enhance knowledge and skills.</p>
        <button className="join-button">Join Now</button>
      </section>
    </div>
  );
};

export default HomePage;
