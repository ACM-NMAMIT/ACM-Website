// App.jsx


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Importing the Navbar component
import Footer from './components/Footer'; // Importing the Footer component
import HomePage from './pages/HomePage'; // Importing the Home Page
import AboutUsPage from './pages/AboutUsPage'; // Importing the About Us Page
import EventsPage from './pages/EventsPage'; // Importing the Events Page
import CoreMembersPage from './pages/CoreMembersPage'; // Importing the Core Members Page
import ContactUsPage from './pages/ContactUsPage'; // Importing the Contact Us Page
import './App.css'; // Importing the main CSS file

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar /> {/* Render the Navbar component */}

        <main className="app-main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/core-members" element={<CoreMembersPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
          </Routes>
        </main>

        <Footer /> {/* Render the Footer component */}
      </div>
    </Router>
  );
};

export default App;
