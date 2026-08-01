import { FaServer, FaLaptopCode, FaDatabase, FaClipboardList } from 'react-icons/fa';
import './Services.css';

export default function Services() {
  const servicesList = [
    {
      icon: <FaServer />,
      title: "Backend Engineering",
      desc: "Architecting reliable REST APIs and enterprise logic using Java, Spring Boot, Spring Security, and JPA Hibernate."
    },
    {
      icon: <FaLaptopCode />,
      title: "Frontend Engineering",
      desc: "Creating high-fidelity, accessible, and responsive user interfaces utilizing React, state management, and modern CSS gradients."
    },
    {
      icon: <FaDatabase />,
      title: "Database Integration",
      desc: "Designing clean database architectures in Oracle MySQL, writing optimized PL/SQL queries, and scheduling index procedures."
    },
    {
      icon: <FaClipboardList />,
      title: "Scoping & Collaboration",
      desc: "Gathering system parameters from business clients, managing online bidding strategies, and detailing roadmap milestones."
    }
  ];

  return (
    <section id="services" className="services-section reveal">
      <div className="section-header">
        <span className="section-subtitle">Offerings</span>
        <h2 className="section-title-text">What I Do</h2>
        <div className="title-underline"></div>
      </div>

      <div className="services-grid">
        {servicesList.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-desc">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
