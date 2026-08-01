import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import './FAQ.css';

export default function FAQ() {
  const faqData = [
    {
      q: "What is your primary programming language and framework focus?",
      a: "My primary programming language is Java. On the enterprise side, I specialize in building backend REST endpoints using Spring Boot. On the frontend, I focus on building dynamic components using React and responsive CSS."
    },
    {
      q: "Are you open to relocation or remote opportunities?",
      a: "Yes! I am fully open to remote work, hybrid arrangements, or on-site relocation, depending on the role requirements and location."
    },
    {
      q: "What experience do you have in client communication?",
      a: "As an IT Intern at Viami Global Services LLP, I have hands-on experience handling online bidding frameworks, analyzing project requirements directly from client specifications, and detailing deliverables."
    },
    {
      q: "Which DevOps and DevSecOps tools do you utilize?",
      a: "I work with Git & GitHub for version control and collaborate on project boards. I have trained in DevSecOps principles, incorporating basic containerization with Docker and code reliability pipelines."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section reveal">
      <div className="section-header">
        <span className="section-subtitle">FAQ</span>
        <h2 className="section-title-text">Common Questions</h2>
        <div className="title-underline"></div>
      </div>

      <div className="faq-container">
        {faqData.map((item, idx) => (
          <div 
            key={idx} 
            className={`faq-item ${activeIndex === idx ? 'active' : ''}`}
            onClick={() => toggleAccordion(idx)}
          >
            <div className="faq-question">
              <h3>{item.q}</h3>
              <span className="faq-chevron"><FaChevronDown /></span>
            </div>
            <div className="faq-answer">
              <p>{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
