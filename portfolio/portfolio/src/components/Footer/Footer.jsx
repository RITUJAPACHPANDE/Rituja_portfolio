import { FaArrowUp, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer-container">
      <div className="footer-gradient-border" />
      
      <div className="footer-content">
        <div className="footer-logo">
          Rituja<span>.</span>
        </div>

        <p className="footer-text">
          Designed & Built by Rituja Pachpande. © {new Date().getFullYear()} All Rights Reserved.
        </p>

        <div className="footer-social-row">
          <a href="https://www.linkedin.com/in/rituja-pachpande-25771a316" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="mailto:ritujapachpane12@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>

        <button className="back-to-top-btn" onClick={handleScrollToTop} aria-label="Back to top">
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
}
