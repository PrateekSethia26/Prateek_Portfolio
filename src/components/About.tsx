import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { StaggeredList } from "@/components/StaggeredList";

export const About = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

  const technologies = [
    "JavaScript",
    "Java",
    "Python",
    "React",
    "Node.js",
    "Express.js",
    "Next.js",
    "Git",
    "TailwindCSS",
    "UI/UX Design",
    "Figma",
  ];

  return (
    <section id="about" className="py-20 bg-dark-navy">
      <div className="max-w-4xl mx-auto px-6">
        <div ref={titleRef}>
          <h2
            className={`text-3xl font-bold text-light-slate mb-12 transition-all duration-700 hover:animate-glow ${
              titleVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="text-mint font-mono text-lg animate-pulse">
              01.
            </span>{" "}
            About Me
          </h2>
        </div>

        <div
          ref={contentRef}
          className="grid md:grid-cols-5 gap-12 items-start"
        >
          <div
            className={`md:col-span-3 transition-all duration-700 ${
              contentVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="space-y-4 text-slate leading-relaxed">
              <p className="hover:text-light-slate transition-colors duration-300 hover:scale-105 transform">
                Hello! I'm{" "}
                <span className="text-mint font-medium animate-glow">
                  Prateek
                </span>
                , a developer who deeply values the intersection of code and
                design. My passion lies in creating digital experiences that are
                not just functional but delightful to use.
              </p>

              <p className="hover:text-light-slate transition-colors duration-300 hover:scale-105 transform">
                With a background in both design and development, I bring a
                unique perspective to projects – understanding both the
                technical architecture and the user-centered design principles
                needed for exceptional products.
              </p>

              <p className="hover:text-light-slate transition-colors duration-300 hover:scale-105 transform">
                I believe in writing clean, maintainable code with the same care
                I apply to pixel-perfect interfaces. Every project is an
                opportunity to blend technical excellence with meaningful user
                experiences.
              </p>
            </div>
          </div>

          {/* <div
            className={`md:col-span-2 transition-all duration-700 ${
              contentVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <p className="text-light-slate mb-6 animate-fade-in hover:animate-glow transition-all duration-300">
              Here are a few technologies I've been working with recently:
            </p>

            <StaggeredList items={technologies} />
          </div> */}
          <div
            className={`md:col-span-2 transition-all duration-700 ${
              contentVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <p className="text-light-slate mb-6 animate-fade-in hover:animate-glow transition-all duration-300">
              Here are a few technologies I've been working with recently:
            </p>

            <ul className="grid grid-cols-2 gap-y-3 gap-x-10 list-none text-slate text-sm font-mono">
              {technologies.map((tech, index) => (
                <li
                  key={index}
                  className="relative pl-4 before:content-['▹'] before:absolute before:left-0 before:text-mint"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
