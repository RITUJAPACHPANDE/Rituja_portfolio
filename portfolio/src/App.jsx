import { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import DeveloperCLI from './components/DeveloperCLI/DeveloperCLI';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Certifications from './components/Certifications/Certifications';
import FAQ from './components/FAQ/FAQ';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import CustomCursor from './components/CustomCursor/CustomCursor';

export default function App() {
  useEffect(() => {
    // Scroll reveal observer
    const revealElements = document.querySelectorAll('.reveal');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      {
        threshold: 0.1, // trigger when 10% visible
        rootMargin: '0px 0px -50px 0px', // slightly offset trigger point
      }
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      {/* Interactive Custom Cursor */}
      <CustomCursor />

      {/* Futuristic Animated Background (CSS Only) */}
      <div className="bg-wrapper">
        <div className="bg-grid" />
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Main Page Flow */}
      <main>
        <Hero />
        
        <div className="section-divider" />
        <About />

        <div className="section-divider" />
        <Services />
        
        <div className="section-divider" />
        <Skills />
        
        <div className="section-divider" />
        <Projects />

        <div className="section-divider" />
        <DeveloperCLI />
        
        <div className="section-divider" />
        <Experience />
        
        <div className="section-divider" />
        <Education />

        <div className="section-divider" />
        <Certifications />

        <div className="section-divider" />
        <FAQ />
        
        <div className="section-divider" />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}