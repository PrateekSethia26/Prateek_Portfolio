
import { useState, useEffect } from "react";
import { Download } from "lucide-react";
import { MagneticHover } from "./MagneticHover";
import { RippleButton } from "./RippleButton";

export const AnimatedNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['about', 'projects', 'research', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      setActiveSection(current || '');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Prateek_Sethia_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-dark-navy/95 backdrop-blur-md shadow-lg shadow-dark-navy/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <MagneticHover strength={0.3}>
            <div className="text-2xl font-bold text-mint font-mono animate-pulse">
              PS
            </div>
          </MagneticHover>
          
          <div className="hidden md:flex items-center space-x-8">
            {[
              { id: 'about', label: 'About', number: '01' },
              { id: 'projects', label: 'Projects', number: '02' },
              { id: 'research', label: 'Research', number: '03' },
              { id: 'contact', label: 'Contact', number: '04' }
            ].map((item, index) => (
              <MagneticHover key={item.id} strength={0.2}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`relative group font-mono text-sm transition-all duration-300 hover:text-mint ${
                    activeSection === item.id ? 'text-mint' : 'text-slate'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="text-mint mr-1">{item.number}.</span>
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-mint transform origin-left transition-transform duration-300 ${
                    activeSection === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}></span>
                </button>
              </MagneticHover>
            ))}
            
            <MagneticHover strength={0.3}>
              <div style={{ animationDelay: '400ms' }}>
                <RippleButton
                  onClick={downloadResume}
                  variant="outline"
                  className="border-mint text-mint hover:bg-mint/10 hover:scale-105 animate-pulse"
                >
                  <Download size={16} className="mr-2" />
                  Resume
                </RippleButton>
              </div>
            </MagneticHover>
          </div>
        </div>
      </div>
    </nav>
  );
};
