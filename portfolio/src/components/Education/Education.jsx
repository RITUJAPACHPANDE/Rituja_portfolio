import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt, FaAward } from 'react-icons/fa';
import './Education.css';

export default function Education() {
  const educationData = [
    {
      degree: "B-Tech in Computer Science Engineering",
      institution: "Thakur Shivkumar Singh Memorial College, Burhanpur",
      affiliation: "Rajiv Gandhi Proudyogiki Vishwavidyalaya",
      period: "2021 - 2025",
      metrics: "CGPA : 7.71 / 10",
      achievements: [
        "Major in core software architectures, database management systems, and web application design.",
        "Participated in hands-on labs and project engineering modules.",
        "Academic score: First Class Distinction."
      ]
    },
    {
      degree: "Higher Secondary (Class XII)",
      institution: "Govt. Higher Secondary School Nepanagar",
      affiliation: "Science Stream (PCM)",
      period: "2020 - 2021",
      metrics: "Score : 76%",
      achievements: [
        "Core studies in Mathematics, Physics, and Chemistry.",
        "Excelled in mathematical problem-solving."
      ]
    },
    {
      degree: "Secondary School (Class X)",
      institution: "Govt. Higher Secondary School Nepanagar",
      affiliation: "General Education",
      period: "2018 - 2019",
      metrics: "Score : 75%",
      achievements: [
        "Broad foundational curriculum covering sciences, mathematics, and humanities."
      ]
    }
  ];

  return (
    <section id="education" className="education-section reveal">
      <div className="section-header">
        <span className="section-subtitle">Qualifications</span>
        <h2 className="section-title-text">Education Path</h2>
        <div className="title-underline"></div>
      </div>

      <div className="education-timeline">
        <div className="edu-line" />
        
        {educationData.map((edu, index) => (
          <div key={index} className="edu-item">
            {/* Timeline Marker */}
            <div className="edu-marker">
              <span className="edu-marker-icon"><FaGraduationCap /></span>
            </div>

            {/* Content card */}
            <div className="edu-content-card">
              <div className="edu-header">
                <span className="edu-period"><FaCalendarAlt /> {edu.period}</span>
                <span className="edu-metrics"><FaAward /> {edu.metrics}</span>
              </div>
              <h3 className="edu-degree">{edu.degree}</h3>
              <h4 className="edu-institution">{edu.institution}</h4>
              <p className="edu-affiliation"><FaMapMarkerAlt /> Affiliated to {edu.affiliation}</p>
              
              {edu.achievements.length > 0 && (
                <ul className="edu-achievements-list">
                  {edu.achievements.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
