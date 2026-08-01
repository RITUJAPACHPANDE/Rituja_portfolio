import About from "../components/About/About";
import Experience from "../components/Experience/Experience";
import Education from "../components/Education/Education";
import Certifications from "../components/Certifications/Certifications";

function AboutPage() {
  return (
    <main>
      <About />

      <div className="section-divider" />
      <Experience />

      <div className="section-divider" />
      <Education />

      <div className="section-divider" />
      <Certifications />
    </main>
  );
}

export default AboutPage;
