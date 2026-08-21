import { educationData } from '../data/educationData';
import { useState, useEffect } from 'react';

export function Education() {
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

  const sectionBg = isDark ? 'bg-dark-bg' : 'bg-beige';
  const titleColor = isDark ? 'text-dark-primary' : 'text-primary';
  const spanColor = isDark ? 'bg-dark-secondary' : 'bg-secondary';
  const cardBg = isDark ? 'bg-dark-card' : 'bg-white';
  const cardBorder = isDark ? 'border-dark-border' : 'border-card-border';
  const shadow = isDark ? 'shadow-dark-card' : 'shadow-card';
  const titleCardColor = isDark ? 'text-dark-primary' : 'text-primary';
  const dateColor = isDark ? 'text-dark-text-muted' : 'text-[#7a4a3a]';

  return (
    <section id="formacao" className={`py-16 ${sectionBg} transition-colors duration-300`}>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className={`text-3xl font-bold ${titleColor} mb-10 relative inline-block`}>
          Formação Acadêmica
          <span className={`block w-12 h-1 ${spanColor} absolute -bottom-2 left-0 rounded transition-colors duration-300`}></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationData.map((item) => (
            <div
              key={item.id}
              className={`${cardBg} rounded-xl p-6 ${shadow} 
                         border ${cardBorder} hover:-translate-y-1 transition-all duration-300`}
            >
              <h4 className={`text-lg font-bold ${titleCardColor} transition-colors duration-300`}>
                {item.title}
              </h4>
              <p className={`text-sm ${dateColor} transition-colors duration-300`}>
                {item.institution}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}