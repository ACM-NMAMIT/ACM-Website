// EventsPage.jsx


import { FaCalendarAlt, FaChalkboardTeacher, FaUsers, FaPhotoVideo } from 'react-icons/fa'; // Import relevant icons
import './EventsPage.css'; // Import the CSS file

const EventsPage = () => {
  const events = [
    {
      id: 1,
      title: 'Coding Bootcamp',
      date: 'April 15, 2024',
      description: 'A 2-day intensive coding bootcamp focusing on web development.',
      icon: <FaChalkboardTeacher />,
    },
    {
      id: 2,
      title: 'Guest Lecture Series',
      date: 'May 10, 2024',
      description: 'An opportunity to learn from industry experts and gain insights into the tech world.',
      icon: <FaUsers />,
    },
    {
      id: 3,
      title: 'Hackathon 2024',
      date: 'June 5-6, 2024',
      description: 'Join us for a 24-hour hackathon to showcase your skills and creativity!',
      icon: <FaCalendarAlt />,
    },
    {
      id: 4,
      title: 'Photography Workshop',
      date: 'July 20, 2024',
      description: 'Learn photography skills and tips from professionals.',
      icon: <FaPhotoVideo />,
    },
    // Add more events as needed
  ];

  return (
    <div className="events-container">
      <header className="events-header">
        <h1>Upcoming Events</h1>
        <p>Join us for exciting events that enhance your learning and networking opportunities!</p>
      </header>

      <section className="events-list">
        {events.map((event) => (
          <div className="event-card" key={event.id}>
            <div className="event-icon">{event.icon}</div>
            <h3 className="event-title">{event.title}</h3>
            <p className="event-date">{event.date}</p>
            <p className="event-description">{event.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default EventsPage;
