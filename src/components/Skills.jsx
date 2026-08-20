import { useState, useEffect } from 'react';

export function Skills() {
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

  const techSkills = [
    'HTML5 / CSS3',
    'JavaScript (ES6+)',
    'React',
    'Node.js / Express',
    'SQL / MongoDB',
    'Git / GitHub',
    'Pacote Office',
    'Operação CNC',
    'Atendimento ao Público',
    'Inglês Intermediário',
  ];

  const softSkills = ['Adaptabilidade', 'Proatividade', 'Trabalho em equipe', 'Organização', 'Fácil aprendizado'];

  // Cores dinâmicas
  const sectionBg = isDark ? 'bg-[#0F0A1A]' : 'bg-[#FFF8F5]';
  const titleColor = isDark ? 'text-[#A78BFA]' : 'text-[#8B0000]';
  const spanColor = isDark ? 'bg-[#6C3CB0]' : 'bg-[#CC3300]';
  const tagBg = isDark ? 'bg-[#1A1128]' : 'bg-white';
  const tagBorder = isDark ? 'border-[#3D2A6B]' : 'border-[#F5E0D8]';
  const tagText = isDark ? 'text-gray-200' : 'text-[#3D2A22]';
  const tagHover = isDark 
    ? 'hover:bg-[#6C3CB0] hover:text-white' 
    : 'hover:bg-[#8B0000] hover:text-white';

  return (
    <section id="habilidades" className={`py-16 ${sectionBg} transition-colors duration-300`}>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className={`text-3xl font-bold ${titleColor} text-center mb-10 relative transition-colors duration-300`}>
          Habilidades Técnicas
          <span className={`block w-12 h-1 ${spanColor} mx-auto mt-2 rounded transition-colors duration-300`}></span>
        </h2>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {techSkills.map((skill) => (
            <span
              key={skill}
              className={`${tagBg} ${tagBorder} ${tagText} ${tagHover} 
                         px-6 py-2.5 rounded-full text-sm font-medium 
                         border transition-colors duration-300 cursor-default`}
            >
              {skill}
            </span>
          ))}
        </div>

        <h3 className={`text-xl font-semibold text-center ${titleColor} mb-6 transition-colors duration-300`}>
          Soft Skills
        </h3>

        <div className="flex flex-wrap gap-4 justify-center">
          {softSkills.map((skill) => (
            <span
              key={skill}
              className={`${tagBg} ${tagBorder} ${tagText} ${tagHover} 
                         px-6 py-2.5 rounded-full text-sm font-medium 
                         border transition-colors duration-300 cursor-default`}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}