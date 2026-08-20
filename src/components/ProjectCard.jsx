import { FaGithub, FaGlobe } from 'react-icons/fa';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaCode } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export function ProjectCard({ name, description, language, html_url, homepage }) {
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

  const isExternal = !!homepage && homepage !== html_url;

  // Cores dinâmicas baseadas no tema
  const iconColor = isDark ? 'text-[#A78BFA]' : 'text-[#CC3300]';
  const cardBg = isDark ? 'bg-[#1A1128]' : 'bg-white';
  const cardBorder = isDark ? 'border-[#3D2A6B]' : 'border-[#F5E0D8]';
  const shadow = isDark 
    ? 'shadow-[0_4px_16px_rgba(45,27,105,0.3)] hover:shadow-[0_12px_32px_rgba(108,60,176,0.3)]' 
    : 'shadow-[0_4px_16px_rgba(139,0,0,0.06)] hover:shadow-[0_12px_32px_rgba(139,0,0,0.12)]';
  const hoverBorder = isDark ? 'hover:border-[#6C3CB0]' : 'hover:border-[#CC3300]';
  const badgeBg = isDark ? 'bg-[#2D1B69]' : 'bg-[#FAE6DF]';
  const badgeText = isDark ? 'text-[#A78BFA]' : 'text-[#8B0000]';
  const titleColor = isDark ? 'text-[#C4B5FD]' : 'text-[#5C0000]';
  const descColor = isDark ? 'text-gray-300' : 'text-[#3D2A22]';
  const footerColor = isDark ? 'text-[#A78BFA]' : 'text-[#8B0000]';
  const footerBorder = isDark ? 'border-[#3D2A6B]' : 'border-[#F5E0D8]';
  const btnBg = isDark ? 'bg-[#6C3CB0] group-hover:bg-[#8B5CF6]' : 'bg-[#CC3300] group-hover:bg-[#8B0000]';
  const textMuted = isDark ? 'text-gray-400' : 'text-[#7a4a3a]';

  const iconMap = {
    HTML: <FaHtml5 className={`text-2xl ${iconColor}`} />,
    CSS: <FaCss3Alt className={`text-2xl ${iconColor}`} />,
    JavaScript: <FaJs className={`text-2xl ${iconColor}`} />,
    TypeScript: <FaCode className={`text-2xl ${iconColor}`} />,
    React: <FaReact className={`text-2xl ${iconColor}`} />,
  };
  const icon = iconMap[language] || <FaCode className={`text-2xl ${iconColor}`} />;

  return (
    <a
      href={homepage || html_url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group ${cardBg} rounded-2xl p-6 ${shadow} 
                 border ${cardBorder} transition-all duration-300 
                 hover:-translate-y-1.5 ${hoverBorder} flex flex-col gap-2`}
    >
      <div className={`flex justify-between items-center text-sm ${textMuted}`}>
        {icon}
        <span className={`${badgeBg} ${badgeText} px-3 py-0.5 rounded-full text-xs font-semibold transition-colors duration-300`}>
          {language || 'Sem linguagem'}
        </span>
      </div>

      <h3 className={`text-lg font-bold ${titleColor} mt-1 transition-colors duration-300`}>{name}</h3>
      <p className={`text-sm ${descColor} flex-1 mb-1 transition-colors duration-300`}>
        {description || 'Sem descrição'}
      </p>

      <div className={`flex justify-between items-center text-sm ${footerColor} border-t ${footerBorder} pt-3 mt-1 transition-colors duration-300`}>
        <span className="flex items-center gap-1.5">
          {isExternal ? <FaGlobe /> : <FaGithub />}
          {isExternal ? 'Visitar site' : 'Ver no GitHub'}
        </span>
        <span className={`${btnBg} text-white w-7 h-7 rounded-full flex items-center justify-center transition-colors`}>
          <i className="fas fa-arrow-right text-xs"></i>
        </span>
      </div>
    </a>
  );
}