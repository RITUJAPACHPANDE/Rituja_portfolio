import { FaBriefcase, FaBuilding, FaCalendarAlt } from 'react-icons/fa';
import './Experience.css';

export default function Experience() {
  const experiences = [
    {
      role: "IT Intern",
      company: "Viami Global Services LLP",
      location: "Remote / Hybrid",
      period: "2026 - Present",
      achievements: [
        "Developing frontend modules and interactive elements using React and CSS.",
        "Collaborating on SQL relational databases, creating schemas, and refining queries.",
        "Gaining professional experience with online bidding workflows and technical client communications.",
        "Participating in agile standups, scoping client requests, and detailing feature implementation plans."
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section reveal">
      <div className="section-header">
        <span className="section-subtitle">Professional Path</span>
        <h2 className="section-title-text">Work Experience</h2>
        <div className="title-underline"></div>
      </div>

      <div className="experience-timeline">
        <div className="timeline-line" />
        
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            {/* Logo and Marker */}
            <div className="timeline-marker">
              <span className="marker-icon"><FaBriefcase /></span>
            </div>

            {/* Content Card */}
            <div className="timeline-content-card">
              <div className="card-header-meta">
                <span className="timeline-period"><FaCalendarAlt /> {exp.period}</span>
                <span className="timeline-company"><FaBuilding /> {exp.company}</span>
              </div>
              <h3 className="timeline-role">{exp.role}</h3>
              <p className="timeline-location">{exp.location}</p>
              
              <ul className="timeline-bullet-list">
                {exp.achievements.map((item, aIdx) => (
                  <li key={aIdx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
