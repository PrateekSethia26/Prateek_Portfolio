
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface StaggeredListProps {
  items: string[];
  className?: string;
}

export const StaggeredList = ({ items, className = "" }: StaggeredListProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div ref={ref} className={`grid grid-cols-1 gap-2 ${className}`}>
      {items.map((tech, index) => (
        <div 
          key={tech}
          className={`flex items-center space-x-2 transition-all duration-500 ${
            isVisible 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 -translate-x-4'
          }`}
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          <span className="text-mint text-sm">▹</span>
          <span className="text-slate text-sm font-mono hover:text-light-slate transition-colors duration-200">
            {tech}
          </span>
        </div>
      ))}
    </div>
  );
};
