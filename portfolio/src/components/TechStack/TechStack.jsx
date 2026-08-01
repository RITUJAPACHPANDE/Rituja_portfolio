import "./TechStack.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaAws,
} from "react-icons/fa";

import { SiSpringboot, SiMysql } from "react-icons/si";

function TechStack() {
  const techs = [
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3Alt />, name: "CSS3" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <FaJava />, name: "Java" },
    { icon: <SiSpringboot />, name: "Spring Boot" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <FaGithub />, name: "GitHub" },
    { icon: <FaAws />, name: "AWS (basics)" },
  ];

  return (
    <section className="tech-section reveal">
      <h2>Technologies I Work With</h2>

      <p>
        I build responsive and scalable web applications using modern frontend,
        backend, and cloud technologies.
      </p>

      <div className="tech-grid">
        {techs.map((tech, index) => (
          <div className="tech-card" key={index}>
            <div className="tech-icon">{tech.icon}</div>
            <h3>{tech.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechStack;