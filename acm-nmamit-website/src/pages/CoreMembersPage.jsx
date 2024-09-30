// CoreMemberCard.jsx


import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'; // Import social media icons
import './CoreMemberCard.css'; // Import the CSS file

const members = [
  {
    id: 1,
    name: "Alice Johnson",
    role: "President",
    description: "Leading the team with vision and determination.",
    linkedin: "https://linkedin.com/in/alice-johnson",
    github: "https://github.com/alicejohnson",
    twitter: "https://twitter.com/alice_johnson",
    image: "https://via.placeholder.com/150", // Replace with actual member images
  },
  {
    id: 2,
    name: "Bob Smith",
    role: "Vice President",
    description: "Assisting the president and managing events.",
    linkedin: "https://linkedin.com/in/bob-smith",
    github: "https://github.com/bobsmith",
    twitter: "https://twitter.com/bob_smith",
    image: "https://via.placeholder.com/150",
  },
  // Add 23 more members here
  {
    id: 3,
    name: "Charlie Brown",
    role: "Secretary",
    description: "Keeping track of all the meetings and notes.",
    linkedin: "https://linkedin.com/in/charlie-brown",
    github: "https://github.com/charliebrown",
    twitter: "https://twitter.com/charlie_brown",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Daisy Miller",
    role: "Treasurer",
    description: "Managing the club's finances and budgets.",
    linkedin: "https://linkedin.com/in/daisy-miller",
    github: "https://github.com/daisymiller",
    twitter: "https://twitter.com/daisy_miller",
    image: "https://via.placeholder.com/150",
  },
  // ... Continue adding members until you reach 25
];

const CoreMemberCard = () => {
  return (
    <div className="core-member-card-container">
      {members.map(member => (
        <div key={member.id} className="member-card">
          <div className="member-image-container">
            <img src={member.image} alt={member.name} className="member-image" />
            <div className="hover-effect">
              <p>Click to view profile</p>
            </div>
          </div>
          <h3 className="member-name">{member.name}</h3>
          <p className="member-role">{member.role}</p>
          <p className="member-description">{member.description}</p>
          <div className="social-media-links">
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon" />
            </a>
            <a href={member.github} target="_blank" rel="noopener noreferrer">
              <FaGithub className="social-icon" />
            </a>
            <a href={member.twitter} target="_blank" rel="noopener noreferrer">
              <FaTwitter className="social-icon" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CoreMemberCard;
