import { useState, useEffect } from "react";
import { Download } from "lucide-react";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/uc?export=download&id=1pvM7WGFx-XOFB4FcuPEoQom9jWQAgVFU";
    link.download = "Prateek_Sethia_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-dark-navy/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-mint">PS</div>

          <div className="hidden md:flex items-center space-x-8">
            {["about", "projects", "research", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-light-slate hover:text-mint transition-colors duration-200 capitalize font-medium"
              >
                {item}
              </button>
            ))}
            <button
              onClick={downloadResume}
              className="flex items-center space-x-2 px-4 py-2 border border-mint text-mint hover:bg-mint/10 rounded transition-all duration-200 font-medium"
            >
              <Download size={16} />
              <span>Resume</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
