import Projects from "../components/Projects/Projects";
import DeveloperCLI from "../components/DeveloperCLI/DeveloperCLI"

function ProjectsPage() {
  return (
    <main>
      <Projects />

      <div className="section-divider" />
      <DeveloperCLI />
    </main>

  );
}

export default ProjectsPage;