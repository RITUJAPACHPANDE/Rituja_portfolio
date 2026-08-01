import { FaAward, FaExternalLinkAlt, FaCertificate } from 'react-icons/fa';
import './Certifications.css';

export default function Certifications() {
  const certsList = [
    {
      title: "Core Java Specialization",
      issuer: "Coursera / Oracle Partner",
      date: "2024",
      skills: ["OOP", "Data Structures", "Multi-threading"]
    },
    {
      title: "HackerRank Problem Solving (Java)",
      issuer: "HackerRank",
      date: "2024",
      skills: ["Algorithms", "Complexity", "Java (ES)"]
    },
    {
      title: "Modern React & Frontend Development",
      issuer: "Udemy Bootcamp",
      date: "2025",
      skills: ["Vite", "React 19 Hooks", "CSS Transitions"]
    },
    {
      title: "DevSecOps Foundations",
      issuer: "Viami Internal Training",
      date: "2026",
      skills: ["Docker", "Git Pipelines", "SonarQube"]
    }
  ];

  return (
    <section id="certifications" className="certs-section reveal">
      <div className="section-header">
        <span className="section-subtitle">Credentials</span>
        <h2 className="section-title-text">Certifications</h2>
        <div className="title-underline"></div>
      </div>

      <div className="certs-grid">
        {certsList.map((cert, index) => (
          <div key={index} className="cert-card">
            <div className="cert-badge-glow" />
            <div className="cert-card-inner">
              <span className="cert-icon"><FaAward /></span>
              <div className="cert-meta">
                <span className="cert-date">{cert.date}</span>
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer"><FaCertificate /> {cert.issuer}</p>
              </div>
              <div className="cert-skills">
                {cert.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="cert-skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
