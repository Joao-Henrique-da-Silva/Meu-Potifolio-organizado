import { experiences } from '../data/experienceData';
import { useState, useEffect } from 'react';

export function Experience() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    
    observer.observe(document.documentElement, { 
      attributes: true, 
      attributeFilter: ['class'] 
    });
    
    setIsDark(document.documentElement.classList.contains('dark'));
    
    return () => observer.disconnect();
  }, []);

  const sectionBg = isDark ? 'bg-dark-card' : 'bg-section-bg';
  const titleColor = isDark ? 'text-dark-primary' : 'text-primary';
  const spanColor = isDark ? 'bg-dark-secondary' : 'bg-secondary';
  const cardBg = isDark ? 'bg-dark-card' : 'bg-white';
  const cardBorder = isDark ? 'border-dark-secondary' : 'border-secondary';
  const shadow = isDark ? 'shadow-dark-card' : 'shadow-card';
  const titleCardColor = isDark ? 'text-dark-primary' : 'text-primary';
  const dateColor = isDark ? 'text-dark-text-muted' : 'text-[#7a4a3a]';
  const companyColor = isDark ? 'text-dark-primary' : 'text-secondary';
  const descColor = isDark ? 'text-dark-text' : 'text-card-text';

  return (
    <section id="experiencia" className={`py-16 ${sectionBg} transition-colors duration-300`}>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className={`text-3xl font-bold ${titleColor} text-center mb-10 relative`}>
          Experiência Profissional
          <span className={`block w-12 h-1 ${spanColor} mx-auto mt-2 rounded transition-colors duration-300`}></span>
        </h2>

        <div className="flex flex-col gap-6">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className={`${cardBg} rounded-xl p-6 ${shadow} 
                         border-l-4 ${cardBorder} transition-all duration-300`}
            >
              <div className="flex flex-wrap justify-between items-start gap-2">
                <h3 className={`text-lg font-bold ${titleCardColor} transition-colors duration-300`}>
                  {exp.title}
                </h3>
                <span className={`text-sm ${dateColor} transition-colors duration-300`}>
                  {exp.date}
                </span>
              </div>
              <p className={`font-medium ${companyColor} text-sm transition-colors duration-300`}>
                {exp.company}
              </p>
              <p className={`text-sm ${descColor} mt-1 transition-colors duration-300`}>
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}