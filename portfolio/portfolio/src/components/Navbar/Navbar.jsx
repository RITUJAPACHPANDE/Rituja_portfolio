import { useEffect, useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Set glass effect background
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Check active section
      const scrollPos = window.scrollY + 150; // offset
      for (const link of navLinks) {
        const element = document.getElementById(link.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(link.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const top = element.offsetTop - 80; // Navbar offset
      window.scrollTo({
        top: top,
        behavior: 'smooth',
      });
      setActiveSection(id);
      setMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar-container ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-content">
        <a href="#home" className="nav-logo" onClick={(e) => handleLinkClick(e, 'home')}>
          <span>Rituja</span>
          <span className="dot">.</span>
        </a>

        {/* Mobile menu toggle */}
        <button 
          className={`menu-toggle ${menuOpen ? 'open' : ''}`} 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <ul className={`nav-links ${menuOpen ? 'mobile-open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`nav-link-item ${activeSection === link.id ? 'active' : ''}`}
                onClick={(e) => handleLinkClick(e, link.id)}
              >
                {link.label}
                <span className="link-indicator" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
