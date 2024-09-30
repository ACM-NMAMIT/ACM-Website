// EventCard.jsx


import { FaCalendarAlt, FaChalkboardTeacher, FaAward, FaRocket } from 'react-icons/fa'; // Importing React Icons
import './EventCard.css'; // Import the CSS file

const events = [
  {
    id: 1,
    title: "Coding Workshop",
    date: "October 10, 2024",
    description: "Join us for a workshop on advanced coding techniques. Enhance your skills and learn from experts!",
    icon: <FaChalkboardTeacher className="event-icon" />,
  },
  {
    id: 2,
    title: "Hackathon 2024",
    date: "November 15-16, 2024",
    description: "Participate in our annual hackathon. Collaborate, innovate, and showcase your projects!",
    icon: <FaRocket className="event-icon" />,
  },
  {
    id: 3,
    title: "Guest Lecture: AI in Industry",
    date: "October 25, 2024",
    description: "A special guest lecture on the impact of AI in various industries. Don't miss it!",
    icon: <FaCalendarAlt className="event-icon" />,
  },
  {
    id: 4,
    title: "Intercollegiate Coding Challenge",
    date: "December 5, 2024",
    description: "Compete against students from other colleges and prove your coding prowess!",
    icon: <FaAward className="event-icon" />,
  },
  {
    id: 5,
    title: "Web Development Bootcamp",
    date: "January 20-22, 2025",
    description: "An intensive bootcamp covering full-stack web development. Sign up now!",
    icon: <FaChalkboardTeacher className="event-icon" />,
  },
  {
    id: 6,
    title: "Data Science Workshop",
    date: "February 15, 2025",
    description: "Learn the basics of Data Science and Machine Learning in this hands-on workshop.",
    icon: <FaRocket className="event-icon" />,
  },
  {
    id: 7,
    title: "Tech Talk: Future of Computing",
    date: "March 10, 2025",
    description: "Join industry leaders discussing the future trends in computing technology.",
    icon: <FaCalendarAlt className="event-icon" />,
  },
  {
    id: 8,
    title: "Networking Session",
    date: "April 1, 2025",
    description: "Meet and connect with industry professionals and fellow students. Expand your network!",
    icon: <FaAward className="event-icon" />,
  },
];

const EventCard = () => {
  return (
    <div className="event-card-container">
      {events.map(event => (
        <div key={event.id} className="event-card">
          <div className="event-icon-container">
            {event.icon}
          </div>
          <h3 className="event-title">{event.title}</h3>
          <p className="event-date">{event.date}</p>
          <p className="event-description">{event.description}</p>
          <a href="/register" className="register-button">Register Now</a>
        </div>
      ))}
    </div>
  );
};

export default EventCard;
