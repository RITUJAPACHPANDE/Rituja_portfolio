import { FaGithub, FaExternalLinkAlt, FaFolderOpen, FaCircle } from 'react-icons/fa';
import './Projects.css';

export default function Projects() {
  const projectsList = [
    {
      title: "Food Delivery MERN Web App",
      category: "Full Stack (MERN)",
      description: "A complete online food ordering and delivery system featuring real-time tracking, administrative dashboards, and integrated payment gateways.",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Redux", "Stripe API"],
      features: [
        "Interactive customer shopping cart & checkout flow",
        "Admin control board for managing restaurants, categories, and active deliveries",
        "Secure user authentication (JWT) & automated email notifications",
        "Responsive, state-of-the-art UI matching leading platforms"
      ],
      gitHubLink: "https://github.com",
      demoLink: "https://google.com",
      colorTheme: "linear-gradient(135deg, #EF4444 0%, #F59E0B 100%)", // Orange/red gradient
      mockCode: "const [cart, setCart] = useState([]);\nconst addToCart = (item) => {\n  setCart([...cart, item]);\n  toast.success(`${item.name} added!`);\n};"
    },
    {
      title: "Hospital Management System",
      category: "Enterprise Backend (Spring Boot)",
      description: "A secure patient administration and doctor scheduling system designed to streamline healthcare services, check-ins, and doctor roster allocations.",
      technologies: ["Java", "Spring Boot", "MySQL", "Hibernate/JPA", "Spring Security", "Bootstrap"],
      features: [
        "Multi-role user portals (Patient, Doctor, Admin staff panels)",
        "Appointment booking engine with automated conflict resolution",
        "Robust database schema designed with MySQL & Spring Data JPA",
        "Spring Security session management and encrypted user credentials"
      ],
      gitHubLink: "https://github.com",
      demoLink: "https://google.com",
      colorTheme: "linear-gradient(135deg, #3B82F6 0%, #10B981 100%)", // Blue/green gradient
      mockCode: "@RestController\n@RequestMapping(\"/api/appointments\")\npublic class AppointmentController {\n    @Autowired\n    private BookingService service;\n}"
    }
  ];

  return (
    <section id="projects" className="projects-section reveal">
      <div className="section-header">
        <span className="section-subtitle">Portfolio Showcase</span>
        <h2 className="section-title-text">Featured Projects</h2>
        <div className="title-underline"></div>
      </div>

      <div className="projects-grid">
        {projectsList.map((project, index) => (
          <div key={index} className="project-card">
            {/* Mock Browser Frame */}
            <div className="browser-frame">
              <div className="browser-header">
                <div className="browser-dots">
                  <FaCircle className="dot-red" />
                  <FaCircle className="dot-yellow" />
                  <FaCircle className="dot-green" />
                </div>
                <div className="browser-search-bar">https://rituja.dev/{project.title.toLowerCase().replace(/ /g, "-")}</div>
              </div>
              <div className="browser-content" style={{ background: project.colorTheme }}>
                <div className="browser-overlay-content">
                  <span className="folder-icon"><FaFolderOpen /></span>
                  <pre className="code-snippet"><code>{project.mockCode}</code></pre>
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="project-details">
              <span className="project-category">{project.category}</span>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>

              <div className="project-features-list">
                <h4>Key Capabilities:</h4>
                <ul>
                  {project.features.map((feat, fIdx) => (
                    <li key={fIdx}>{feat}</li>
                  ))}
                </ul>
              </div>

              <div className="project-tech-badges">
                {project.technologies.map((tech, tIdx) => (
                  <span key={tIdx} className="tech-badge">{tech}</span>
                ))}
              </div>

              <div className="project-actions">
                <a href={project.gitHubLink} target="_blank" rel="noopener noreferrer" className="action-btn btn-primary-action">
                  <FaGithub /> Source Code
                </a>
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="action-btn btn-secondary-action">
                  <FaExternalLinkAlt /> Live Preview
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
