import { FaMapMarkerAlt, FaBriefcase, FaGraduationCap, FaCode, FaCommentDots } from 'react-icons/fa';
import './About.css';

export default function About() {
  return (
    <section id="about" className="about-section reveal">
      <div className="section-header">
        <span className="section-subtitle">Biography</span>
        <h2 className="section-title-text">About Me</h2>
        <div className="title-underline"></div>
      </div>

      <div className="about-grid">
        {/* Intro card (wide) */}
        <div className="about-card intro-card">
          <div className="card-decor"></div>
          <h3 className="card-heading">Introduction</h3>
          <p className="intro-text">
            I am a passionate <strong>Full Stack Java Developer</strong> and React enthusiast. I love turning complex business requirements into sleek, scalable, and responsive applications. With a solid foundation in backend system engineering and a keen eye for front-end aesthetics, I bridge the gap between reliability and user experience.
          </p>
          <p className="intro-text">
            Currently working as an <strong>IT Intern</strong>, I get hands-on with front-end components, client collaborations, project architectures, and resolving performance bottlenecks.
          </p>
        </div>

        {/* Experience mini card */}
        <div className="about-card metric-card">
          <div className="card-icon-wrapper"><FaBriefcase /></div>
          <h3>IT Intern</h3>
          <p className="card-subtitle">Viami Global Services LLP</p>
          <p className="card-desc">Working on live web projects, handling client communication, and learning modern stack integrations.</p>
        </div>

        {/* Education mini card */}
        <div className="about-card metric-card">
          <div className="card-icon-wrapper"><FaGraduationCap /></div>
          <h3>B.Tech CSE</h3>
          <p className="card-subtitle">RGPV University</p>
          <p className="card-desc">Rajiv Gandhi Proudyogiki Vishwavidyalaya | 7.71 CGPA (Class of 2025)</p>
        </div>

        {/* Core Stack card */}
        <div className="about-card metric-card">
          <div className="card-icon-wrapper"><FaCode /></div>
          <h3>Tech Core</h3>
          <p className="card-subtitle">Languages & Tools</p>
          <div className="stack-tags">
            <span>Java</span>
            <span>React</span>
            <span>SQL</span>
            <span>HTML/CSS</span>
            <span>Spring Boot</span>
            <span>Git</span>
          </div>
        </div>

        {/* Location card */}
        <div className="about-card metric-card">
          <div className="card-icon-wrapper"><FaMapMarkerAlt /></div>
          <h3>Location</h3>
          <p className="card-subtitle">Nepanagar, Madhya Pradesh</p>
          <p className="card-desc">Available for remote roles globally and on-site transitions.</p>
        </div>

        {/* Soft skills card */}
        <div className="about-card metric-card wide-on-mobile">
          <div className="card-icon-wrapper"><FaCommentDots /></div>
          <h3>Interpersonal Skills</h3>
          <p className="card-subtitle">Communication & Collaboration</p>
          <p className="card-desc">Experienced in online bidding platforms, scoping client requirements, and presenting weekly milestones.</p>
        </div>
      </div>
    </section>
  );
}
