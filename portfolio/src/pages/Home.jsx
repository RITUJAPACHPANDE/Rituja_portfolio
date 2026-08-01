import TechStack from "../components/TechStack/TechStack";
import WhyChooseMe from "../components/WhyChooseMe/WhyChooseMe";
import Hero from "../components/Hero/Hero";

function Home() {
  return (
    <main>
      <Hero />
      <div className="section-divider" />
      <TechStack />
      <div className="section-divider" />
      <WhyChooseMe />
    </main>
  );
}

export default Home;