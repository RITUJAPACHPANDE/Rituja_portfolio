import "./WhyChooseMe.css";
import {
  FaCode,
  FaLaptopCode,
  FaRocket,
  FaUsers,
} from "react-icons/fa";

function WhyChooseMe() {
  const features = [
    {
      icon: <FaCode />,
      title: "Clean Code",
      description:
        "I write clean, maintainable, and scalable code following best practices.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Responsive Design",
      description:
        "Every website is fully responsive and works smoothly on all devices.",
    },
    {
      icon: <FaRocket />,
      title: "Fast Learner",
      description:
        "I quickly adapt to new technologies and enjoy solving challenging problems.",
    },
    {
      icon: <FaUsers />,
      title: "Team Player",
      description:
        "I communicate effectively and collaborate well in team environments.",
    },
  ];

  return (
    <section className="why-section reveal">
      <span className="section-tag">WHY CHOOSE ME</span>

      <h2>What Makes Me Different?</h2>

      <p className="why-text">
        I focus on building responsive, scalable, and user-friendly
        applications while continuously learning modern technologies.
      </p>

      <div className="why-grid">
        {features.map((item, index) => (
          <div className="why-card" key={index}>
            <div className="why-icon">{item.icon}</div>

            <h3>{item.title}</h3>

            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseMe;