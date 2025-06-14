
import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const Research = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: cardRef, isVisible: cardVisible } = useScrollAnimation();

  return (
    <section id="research" className="py-20 bg-dark-navy">
      <div className="max-w-4xl mx-auto px-6">
        <div ref={titleRef}>
          <h2 className={`text-3xl font-bold text-light-slate mb-16 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="text-mint font-mono text-lg">03.</span> Research Work
          </h2>
        </div>

        <div ref={cardRef}>
          <Card className={`bg-card/50 border-border hover:bg-card/70 transition-all duration-500 hover:shadow-xl hover:shadow-mint/10 group ${
            cardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <CardContent className="p-8">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-light-slate group-hover:text-mint transition-colors duration-300">
                  Effects of Marine Microplastic on Marine Life
                </h3>
                <a 
                  href="https://doi.org/10.1111/maec.12819"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate hover:text-mint transition-all duration-200 hover:scale-110 transform hover:rotate-12"
                >
                  <ExternalLink size={24} />
                </a>
              </div>

              <p className="text-slate leading-relaxed text-lg mb-6 group-hover:text-light-slate transition-colors duration-300">
                This comprehensive study investigates the impact of microplastic pollution on marine ecosystems, 
                examining how these microscopic particles affect the health and behavior of various marine species. 
                Through systematic analysis and field research, the study provides crucial insights into one of the 
                most pressing environmental challenges of our time, offering data-driven recommendations for 
                conservation efforts and policy development.
              </p>

              <div className="flex flex-wrap gap-3">
                {["Environmental Science", "Marine Biology", "Published Research"].map((tag, index) => (
                  <span 
                    key={tag}
                    className="px-3 py-1 text-sm text-mint font-mono hover:bg-mint/10 rounded transition-all duration-200 hover:scale-105"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
