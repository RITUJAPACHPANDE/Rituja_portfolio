import { FaJava, FaReact, FaDatabase, FaHtml5, FaCss3Alt, FaJs, FaTools, FaHandsHelping } from 'react-icons/fa';
import './Skills.css';

export default function Skills() {
  const skillCategories = [
    {
      title: "Backend Development",
      icon: <FaJava />,
      skills: [
        { name: "Core Java", level: 90 },
        { name: "Advanced Java (Servlets, JSP)", level: 80 },
        { name: "Spring Boot", level: 75 },
      ]
    },
    {
      title: "Frontend Engineering",
      icon: <FaReact />,
      skills: [
        { name: "React JS", level: 85 },
        { name: "JavaScript (ES6+)", level: 80 },
        { name: "HTML5 & CSS3 / Modern Layouts", level: 90 },
      ]
    },
    {
      title: "Database & Cloud",
      icon: <FaDatabase />,
      skills: [
        { name: "Oracle SQL / Relational Databases", level: 85 },
        { name: "PL/SQL Query Optimization", level: 75 },
      ]
    },
    {
      title: "DevSecOps & Tools",
      icon: <FaTools />,
      skills: [
        { name: "Git & GitHub Version Control", level: 85 },
        { name: "DevSecOps Workflows", level: 70 },
      ]
    },
    {
      title: "Professional Skills",
      icon: <FaHandsHelping />,
      skills: [
        { name: "Client Communication", level: 85 },
        { name: "Online Bidding & Scoping", level: 80 },
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section reveal">
      <div className="section-header">
        <span className="section-subtitle">Proficiencies</span>
        <h2 className="section-title-text">My Skills</h2>
        <div className="title-underline"></div>
      </div>

      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div key={index} className="skills-group-card">
            <div className="group-card-header">
              <span className="category-icon">{category.icon}</span>
              <h3 className="category-title">{category.title}</h3>
            </div>

            <div className="skills-list">
              {category.skills.map((skill, sIdx) => (
                <div key={sIdx} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="progress-bar-bg">
                    <div 
                      className="progress-bar-fill" 
                      style={{ '--target-width': `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
