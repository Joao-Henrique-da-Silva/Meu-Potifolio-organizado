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

  // Cores dinâmicas
  const sectionBg = isDark ? 'bg-[#1A1128]' : 'bg-[#FFF0ED]';
  const titleColor = isDark ? 'text-[#A78BFA]' : 'text-[#8B0000]';
  const spanColor = isDark ? 'bg-[#6C3CB0]' : 'bg-[#CC3300]';
  const cardBg = isDark ? 'bg-[#1A1128]' : 'bg-white';
  const cardBorder = isDark ? 'border-[#6C3CB0]' : 'border-[#CC3300]';
  const shadow = isDark 
    ? 'shadow-[0_4px_16px_rgba(45,27,105,0.3)]' 
    : 'shadow-[0_4px_16px_rgba(139,0,0,0.08)]';
  const titleCardColor = isDark ? 'text-[#C4B5FD]' : 'text-[#5C0000]';
  const dateColor = isDark ? 'text-gray-400' : 'text-[#7a4a3a]';
  const companyColor = isDark ? 'text-[#A78BFA]' : 'text-[#CC3300]';
  const descColor = isDark ? 'text-gray-300' : 'text-[#3D2A22]';

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