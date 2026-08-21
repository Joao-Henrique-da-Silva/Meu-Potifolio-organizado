import { coursesData } from '../data/coursesData';
import { useState, useEffect } from 'react';

export function Courses() {
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
  const cardBorder = isDark ? 'border-dark-border' : 'border-card-border';
  const shadow = isDark ? 'shadow-dark-card' : 'shadow-card';
  const titleCardColor = isDark ? 'text-dark-primary' : 'text-primary';
  const dateColor = isDark ? 'text-dark-text-muted' : 'text-[#7a4a3a]';
  const badgeBg = isDark ? 'bg-dark-badge' : 'bg-badge-bg';
  const badgeText = isDark ? 'text-dark-primary' : 'text-primary';

  return (
    <section id="cursos" className={`py-16 ${sectionBg} transition-colors duration-300`}>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className={`text-3xl font-bold ${titleColor} text-center mb-10 relative`}>
          Cursos Complementares
          <span className={`block w-12 h-1 ${spanColor} mx-auto mt-2 rounded transition-colors duration-300`}></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {coursesData.map((course) => (
            <div
              key={course.id}
              className={`${cardBg} rounded-xl p-6 ${shadow} 
                         border ${cardBorder} hover:-translate-y-1 transition-all duration-300`}
            >
              <h4 className={`text-lg font-bold ${titleCardColor} transition-colors duration-300`}>
                {course.title}
              </h4>
              <p className={`text-sm ${dateColor} mb-3 transition-colors duration-300`}>
                {course.institution}
              </p>

              {course.badges.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {course.badges.map((badge) => (
                    <span
                      key={badge}
                      className={`${badgeBg} ${badgeText} text-xs font-semibold px-3 py-1 rounded-full transition-colors duration-300`}
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}