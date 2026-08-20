import { FaGithub, FaGlobe } from 'react-icons/fa';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaCode } from 'react-icons/fa';

export function ProjectCard({ name, description, language, html_url, homepage }) {
  const isExternal = !!homepage && homepage !== html_url;

  const iconMap = {
    HTML: <FaHtml5 className="text-2xl text-secondary dark:text-[#A78BFA]" />,
    CSS: <FaCss3Alt className="text-2xl text-secondary dark:text-[#A78BFA]" />,
    JavaScript: <FaJs className="text-2xl text-secondary dark:text-[#A78BFA]" />,
    TypeScript: <FaCode className="text-2xl text-secondary dark:text-[#A78BFA]" />,
    React: <FaReact className="text-2xl text-secondary dark:text-[#A78BFA]" />,
  };
  const icon = iconMap[language] || <FaCode className="text-2xl text-secondary dark:text-[#A78BFA]" />;

  return (
    <a
      href={homepage || html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-white dark:bg-[#1A1128] rounded-2xl p-6 shadow-[0_4px_16px_rgba(139,0,0,0.06)] dark:shadow-[0_4px_16px_rgba(45,27,105,0.3)]
                 border border-card-border dark:border-[#3D2A6B] transition-all duration-300 
                 hover:-translate-y-1.5 hover:shadow-[0_12px_32px_rgba(139,0,0,0.12)] dark:hover:shadow-[0_12px_32px_rgba(108,60,176,0.3)]
                 hover:border-secondary dark:hover:border-[#6C3CB0] flex flex-col gap-2"
    >
      <div className="flex justify-between items-center text-sm text-[#7a4a3a] dark:text-gray-400">
        {icon}
        <span className="bg-badge-bg dark:bg-[#2D1B69] px-3 py-0.5 rounded-full text-xs font-semibold text-primary dark:text-[#A78BFA]">
          {language || 'Sem linguagem'}
        </span>
      </div>

      <h3 className="text-lg font-bold text-card-title dark:text-[#C4B5FD] mt-1">{name}</h3>
      <p className="text-sm text-card-text dark:text-gray-300 flex-1 mb-1">{description || 'Sem descrição'}</p>

      <div className="flex justify-between items-center text-sm text-primary dark:text-[#A78BFA] border-t border-card-border dark:border-[#3D2A6B] pt-3 mt-1">
        <span className="flex items-center gap-1.5">
          {isExternal ? <FaGlobe /> : <FaGithub />}
          {isExternal ? 'Visitar site' : 'Ver no GitHub'}
        </span>
        <span className="bg-secondary dark:bg-[#6C3CB0] text-white w-7 h-7 rounded-full flex items-center justify-center 
                         transition-colors group-hover:bg-primary dark:group-hover:bg-[#8B5CF6]">
          <i className="fas fa-arrow-right text-xs"></i>
        </span>
      </div>
    </a>
  );
}