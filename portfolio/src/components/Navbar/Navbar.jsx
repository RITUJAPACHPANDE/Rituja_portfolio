import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar-container ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-content">

        {/* Logo */}
        <Link to="/" className="nav-logo">
          <span>Rituja</span>
          <span className="dot">.</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Navigation */}
        <ul className={`nav-links ${menuOpen ? "mobile-open" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`nav-link-item ${
                  location.pathname === link.path ? "active" : ""
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
                <span className="link-indicator"></span>
              </Link>
            </li>
          ))}
        </ul>

      </div>
    </nav>
  );
}
