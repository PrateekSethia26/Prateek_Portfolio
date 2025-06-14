import { Github, Linkedin, Mail } from "lucide-react";
import { useTypewriter } from "@/hooks/useTypewriter";
import { AnimatedText } from "@/components/AnimatedText";
import { FloatingParticles } from "@/components/FloatingParticles";
import { MagneticHover } from "@/components/MagneticHover";
import { RippleButton } from "@/components/RippleButton";

export const Hero = () => {
  const typewriterText = useTypewriter(
    "I build exceptional digital experiences.",
    100
  );

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-dark-navy relative px-6 pt-20 overflow-hidden">
      <FloatingParticles />

      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-mint to-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div
          className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-mint to-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/2 w-72 h-72 bg-gradient-to-r from-mint to-green-400 rounded-full mix-blend-multiply filter blur-xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <p className="text-mint font-mono text-lg mb-6 animate-fade-in animate-glow">
          Hi, my name is
        </p>

        <AnimatedText
          text="Prateek."
          className="text-6xl md:text-8xl font-bold text-light-slate mb-4"
          staggerDelay={150}
        />

        <h2
          className="text-4xl md:text-6xl font-bold text-slate mb-8 min-h-[4rem] animate-fade-in-up"
          style={{ animationDelay: "1s" }}
        >
          {typewriterText}
          <span className="animate-pulse text-mint">|</span>
        </h2>

        <p
          className="text-slate text-lg md:text-xl max-w-2xl mb-12 leading-relaxed animate-fade-in-up hover:text-light-slate transition-colors duration-300"
          style={{ animationDelay: "3s" }}
        >
          I'm a full-stack developer specializing in creating (and occasionally
          designing) exceptional digital experiences. Currently focused on
          building accessible, human-centered products.
        </p>

        <MagneticHover strength={0.4} className="inline-block mb-16">
          <div style={{ animationDelay: "4s" }}>
            <RippleButton
              onClick={scrollToProjects}
              variant="outline"
              size="lg"
              className="border-mint text-mint hover:bg-mint/10 px-8 py-6 text-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-mint/20 hover:scale-105 animate-fade-in-up animate-pulse group"
            >
              <span className="group-hover:translate-x-1 transition-transform duration-200">
                Check out my work
              </span>
            </RippleButton>
          </div>
        </MagneticHover>

        <div
          className="flex space-x-6 animate-fade-in-up"
          style={{ animationDelay: "5s" }}
        >
          {[
            {
              icon: Github,
              href: "https://github.com/PrateekSethia26",
              delay: "0ms",
            },
            {
              icon: Linkedin,
              href: "https://www.linkedin.com/in/prateeksethia/",
              delay: "100ms",
            },
            {
              icon: Mail,
              href: "mailto:prateeksethia2002@gmail.com",
              delay: "200ms",
            },
          ].map(({ icon: Icon, href, delay }, index) => (
            <MagneticHover key={index} strength={0.3}>
              <a
                href={href}
                target={href.startsWith("mailto:") ? "_self" : "_blank"}
                rel={href.startsWith("mailto:") ? "" : "noopener noreferrer"}
                className="text-slate hover:text-mint transition-all duration-300 hover:scale-110 transform hover:rotate-12 animate-fade-in-up hover:animate-glow"
                style={{ animationDelay: `calc(5s + ${delay})` }}
              >
                <Icon size={28} />
              </a>
            </MagneticHover>
          ))}
        </div>
      </div>
    </section>
  );
};
