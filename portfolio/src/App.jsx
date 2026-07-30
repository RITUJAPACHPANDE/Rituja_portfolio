// import { useState } from "react";
import "./App.css";
import profile from "./assets/Image.jpeg";
import { FaLinkedin } from "react-icons/fa";
function App() {
  return (

    <>
      {/* Navbar */}
      <header>
        <nav className="navbar">
          <h2 className="logo">Portfolio.</h2>

          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="hero">
        <div className="hero-text">
          <h3>Hello, I'm</h3>
          <h1>Rituja Pachpande</h1>
          <h2>Software Developer</h2>

          <p>
            I am a Software Developer focused on building modern,
            scalable, and user-friendly applications.
          </p>

          <div className="hero-btn">
            <a href="#skills" className="btn">View Skills</a>
            <a href="#contact" className="btn-outline">Contact Me</a>
          </div>
        </div>

        <div className="hero-image">
          <img src={profile} alt="Profile" />
        </div>
      </section>

      {/* About */}
      <section className="about" id="about">

      <div className="about-container">

        {/* Left Side */}
        <div className="about-left">

          <div className="info-card">
            <h3>🎓 Education</h3>
            <p>B.Tech (Computer Science Engineering)</p>
          </div>

          <div className="info-card">
            <h3>💼 Experience</h3>
            <p>IT Intern</p>
            <span>Viami Global Services LLP</span>
          </div>

          <div className="info-card">
            <h3>💻 Tech Stack</h3>
            <p>Java • Reac • SQL</p>
            <p>HTML • CSS  • JavaScript</p>
          </div>


        </div>

        {/* Right Side */}
        <div className="about-right">

          <h2>About Me</h2>

          <div className="underline"></div>

          <p>
            I am a <strong>Full Stack Java Developer</strong> with a strong
            foundation in Java, React, JavaScript, HTML, CSS, and SQL.
            I enjoy building modern, responsive, and user-friendly web
            applications that provide meaningful user experiences.
          </p>

          <p>
            Currently, I am working as an <strong>IT Intern</strong>,
            where I am gaining hands-on experience in web development,
            online bidding, and client communication. I am passionate
            about learning new technologies, solving real-world problems,
            and continuously improving my technical skills.
          </p>

        </div>

      </div>

    </section>


      {/* Skills */}
      <section id="skills">
        <div className="section-title">
          <h2>Skills</h2>
        </div>

        <div className="skills-grid">
          <div className="skill">Core Java</div>
          <div className="skill">Advanced Java</div>
          <div className="skill">HTML, CSS, JavaScript</div>
          <div className="skill">React JS</div>
          <div className="skill">Oracle</div>
          <div className="skill">DevSecOps Tools</div>
        </div>
      </section>

      {/* Education */}
      <section id="education">
        <div className="section-title">
          <h2>Education</h2>
        </div>

        <div className="education-grid">
          <div className="education-card">
            <h3>B-Tech in CSE</h3>
            <h4>Rajiv Gandhi Proudyogiki Vishwavidyalaya</h4>
            <p>Thakur Shivkumar Singh Memorial College, Burhanpur</p>
            <p>CGPA : 7.71 / 10</p>
            <span>2021 - 2025</span>
          </div>

          <div className="education-card">
            <h3>Higher Secondary</h3>
            <h4>Science Stream</h4>
            <p>Govt. Higher Secondary School Nepanagar</p>
            <p>76%</p>
            <span>2020 - 2021</span>
          </div>

          <div className="education-card">
            <h3>Secondary School</h3>
            <h4>General Education</h4>
            <p>Higher Secondary School Nepanagar</p>
            <p>75%</p>
            <span>2018 - 2019</span>
          </div>
        </div>
      </section>

     
      
      {/* Contact */}
      <section id="contact">
        <div className="section-title">
          <h2>Contact Me</h2>
        </div>

        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-box">
              <h3>📧 Email</h3>
              <p>ritujapachpane12@gmail.com</p>
            </div>

            <div className="contact-box">
              <h3>📱 Phone</h3>
              <p>+91 6268635941</p>
            </div>

            <div className="contact-box">
              <h3>📍 Location</h3>
              <p>Saikheda Khurd, Nepanagar (M.P.)</p>
            </div>

            <div className="contact-box">
  <h3>
    <FaLinkedin /> LinkedIn
  </h3>

  <p>
    <a
      href="https://www.linkedin.com/in/rituja-pachpande-25771a316"
      target="_blank"
      rel="noopener noreferrer"
    >
     Rituja Pachpande
    </a>
  </p>
</div>
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer>
        <p>© 2026 Rituja Pachpande | All Rights Reserved.</p>
      </footer>
    </>
    );
  }

export default App;