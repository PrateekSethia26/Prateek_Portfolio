
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface AnimatedTextProps {
  text: string;
  className?: string;
  staggerDelay?: number;
}

export const AnimatedText = ({ text, className = "", staggerDelay = 50 }: AnimatedTextProps) => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <div ref={ref} className={className}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className={`inline-block transition-all duration-500 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-4'
          }`}
          style={{
            transitionDelay: isVisible ? `${index * staggerDelay}ms` : '0ms'
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  );
};
