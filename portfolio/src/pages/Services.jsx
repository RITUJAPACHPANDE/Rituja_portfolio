import Services from "../components/Services/Services";
import Skills from "../components/Skills/Skills";
import FAQ from "../components/FAQ/FAQ";

function ServicesPage() {
  return (
    <main>
      <Services />

      <div className="section-divider" />
      <Skills />

      <div className="section-divider" />
      <FAQ />
    </main>
  );
}

export default ServicesPage;