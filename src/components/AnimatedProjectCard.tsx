
import { Github, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { TiltCard } from "@/components/TiltCard";
import { MagneticHover } from "@/components/MagneticHover";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
}

interface AnimatedProjectCardProps {
  project: Project;
  index: number;
}

export const AnimatedProjectCard = ({ project, index }: AnimatedProjectCardProps) => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <div 
      ref={ref}
      className={`grid md:grid-cols-12 gap-8 items-center transition-all duration-700 ${
        index % 2 === 1 ? 'md:text-right' : ''
      } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className={`md:col-span-7 ${index % 2 === 1 ? 'md:col-start-6' : ''}`}>
        <TiltCard maxTilt={10}>
          <Card className="bg-card/50 border-border hover:bg-card/70 transition-all duration-500 hover:shadow-xl hover:shadow-mint/20 group hover:scale-105 animate-gradient bg-gradient-to-br from-card/50 to-card/80">
            <CardContent className="p-8">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-light-slate group-hover:text-mint transition-colors duration-300 group-hover:animate-glow">
                  {project.title}
                </h3>
                <div className="flex space-x-3">
                  <MagneticHover strength={0.3}>
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate hover:text-mint transition-all duration-300 hover:scale-125 transform hover:rotate-12"
                    >
                      <Github size={20} />
                    </a>
                  </MagneticHover>
                  <MagneticHover strength={0.3}>
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate hover:text-mint transition-all duration-300 hover:scale-125 transform hover:rotate-12"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </MagneticHover>
                </div>
              </div>

              <p className="text-slate mb-6 leading-relaxed group-hover:text-light-slate transition-colors duration-300">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 text-sm text-mint font-mono hover:bg-mint/20 rounded transition-all duration-300 hover:scale-110 cursor-default hover:animate-pulse"
                    style={{ transitionDelay: `${techIndex * 50}ms` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </TiltCard>
      </div>
    </div>
  );
};
