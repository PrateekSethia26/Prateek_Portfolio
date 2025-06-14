
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Research } from "@/components/Research";
import { Contact } from "@/components/Contact";
import { AnimatedNavigation } from "@/components/AnimatedNavigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-dark-navy scroll-smooth">
      <AnimatedNavigation />
      <Hero />
      <About />
      <Projects />
      <Research />
      <Contact />
    </div>
  );
};

export default Index;
