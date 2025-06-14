import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { AnimatedProjectCard } from "@/components/AnimatedProjectCard";

export const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();

  const projects = [
    {
      title: "SyncDraw",
      description:
        "A collaborative drawing tool that allows multiple users to create and edit drawings in real-time. Built with modern web technologies for seamless synchronization and an intuitive user interface.",
      technologies: [
        "Next.js",
        "Node.js",
        "Fabric.js",
        "Socket.io",
        "TailwindCSS",
        "MongoDB",
        "Clerk",
      ],
      github:
        "https://github.com/PrateekSethia26/CollabDraw-Real-Time-Interactive-Whiteboard-for-Seamless-Collaboration",
      demo: "https://example.com",
    },
    {
      title: "Todo App",
      description:
        "This is a simple Todo app where you can add tasks to be completed, mark tasks as completed, and delete older tasks. The app is designed to help you stay organized and manage your tasks efficiently.",
      technologies: ["React", "Tailwind CSS"],
      github: "https://github.com/PrateekSethia26/TodoApp",
      demo: "https://pstodoapp.netlify.app/",
    },
    {
      title: "Pulse of Thoughts",
      description:
        "Developing a full-stack blog application using React, Express js, and MongoDB, featuring responsive UI,secure user authentication, and efficient CRUD operations.",
      technologies: ["React.js", "Express.js", "Tailwind CSS", "MongoDB"],
      github: "https://github.com/PrateekSethia26/Pulse_of_Thoughts",
      demo: "https://example.com",
    },
    {
      title: "Youtube Clone",
      description:
        "A full-featured video streaming web application that replicates core functionalities of YouTube. Built using modern web technologies, it offers an intuitive interface for browsing, watching videos",
      technologies: ["React.js", "Tailwind CSS", "Rapid API"],
      github: "https://github.com/PrateekSethia26/youtube-clone",
      demo: "https://ps-ytclone.netlify.app/",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-dark-navy">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref}>
          <h2
            className={`text-3xl font-bold text-light-slate mb-16 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="text-mint font-mono text-lg">02.</span> Some Things
            I've Built
          </h2>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <AnimatedProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
