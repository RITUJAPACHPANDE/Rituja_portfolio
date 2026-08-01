import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaJava, FaReact, FaDatabase, FaJsSquare } from 'react-icons/fa';
import profile from '../../assets/Image.jpeg';
import './Hero.css';

export default function Hero() {
  const words = ["Software Developer", "Full Stack Java Developer", "React Specialist"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer;
    const currentFullWord = words[currentWordIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayText(currentFullWord.substring(0, displayText.length + 1));
        if (displayText === currentFullWord) {
          // Pause before deleting
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        setDisplayText(currentFullWord.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          setTypingSpeed(150);
          return;
        }
      }

      setTypingSpeed(isDeleting ? 75 : 150);
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentWordIndex, typingSpeed]);

  const handleScrollToContact = (e) => {
    e.preventDefault();
    const contactSec = document.getElementById('contact');
    if (contactSec) {
      window.scrollTo({
        top: contactSec.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero-container">
      {/* Floating Coding Elements in Hero Background */}
      <div className="floating-icons">
        <div className="float-icon icon-java"><FaJava /></div>
        <div className="float-icon icon-react"><FaReact /></div>
        <div className="float-icon icon-db"><FaDatabase /></div>
        <div className="float-icon icon-js"><FaJsSquare /></div>
      </div>

      <div className="hero-content">
        <div className="hero-text-block">
          <div className="badge-welcome">Available for Opportunities</div>
          <h3 className="hero-greeting">Hello, I'm</h3>
          <h1 className="hero-name">Rituja Pachpande</h1>
          <h2 className="hero-role-wrapper">
            <span className="static-text">a </span>
            <span className="typed-text">{displayText}</span>
            <span className="cursor-blink">|</span>
          </h2>
          <p className="hero-description">
            I build responsive, high-performance, and scalable web applications. Currently working as an IT Intern, combining strong backend Java foundations with modern React experiences.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn-glow" onClick={handleScrollToContact}>
              Contact Me
            </a>
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                alert("Resume download will be available soon!");
              }} 
              className="btn-glass-download"
            >
              <FaDownload /> Resume
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://www.linkedin.com/in/rituja-pachpande-25771a316" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="mailto:ritujapachpane12@gmail.com" className="social-icon" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Profile Card Container with Glow and Glass Design */}
        <div className="hero-image-block">
          <div className="profile-card-container">
            <div className="profile-card-glow" />
            <div className="profile-card-inner">
              <div className="profile-image-wrapper">
                <img src={profile} alt="Rituja Pachpande" className="profile-img" />
              </div>
              <div className="profile-card-details">
                <h4 className="details-name">Rituja P.</h4>
                <p className="details-loc">Saikheda Khurd, MP</p>
                <div className="details-code-row">
                  <span className="code-tag">Java</span>
                  <span className="code-tag">React</span>
                  <span className="code-tag">SQL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
