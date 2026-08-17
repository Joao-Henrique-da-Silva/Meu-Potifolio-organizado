import { FaGithub, FaGlobe } from 'react-icons/fa';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaCode } from 'react-icons/fa';

export function ProjectCard({ name, description, language, html_url, homepage }) {
  const isExternal = !!homepage && homepage !== html_url;

  // Mapeia a linguagem para o ícone correspondente
  const iconMap = {
    HTML: <FaHtml5 className="text-2xl text-secondary" />,
    CSS: <FaCss3Alt className="text-2xl text-secondary" />,
    JavaScript: <FaJs className="text-2xl text-secondary" />,
    TypeScript: <FaCode className="text-2xl text-secondary" />,
    React: <FaReact className="text-2xl text-secondary" />,
  };
  const icon = iconMap[language] || <FaCode className="text-2xl text-secondary" />;

  return (
    <a
      href={homepage || html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-white rounded-2xl p-6 shadow-[0_4px_16px_rgba(10,59,76,0.06)] 
                 border border-card-border transition-all duration-300 
                 hover:-translate-y-1.5 hover:shadow-[0_12px_32px_rgba(10,59,76,0.15)] 
                 hover:border-secondary flex flex-col gap-2"
    >
      <div className="flex justify-between items-center text-sm text-[#7a4a3a]">
        {icon}
        <span className="bg-badge-bg px-3 py-0.5 rounded-full text-xs font-semibold text-primary">
          {language || 'Sem linguagem'}
        </span>
      </div>

      <h3 className="text-lg font-bold text-card-title mt-1">{name}</h3>
      <p className="text-sm text-card-text flex-1 mb-1">{description || 'Sem descrição'}</p>

      <div className="flex justify-between items-center text-sm text-primary border-t border-card-border pt-3 mt-1">
        <span className="flex items-center gap-1.5">
          {isExternal ? <FaGlobe /> : <FaGithub />}
          {isExternal ? 'Visitar site' : 'Ver no GitHub'}
        </span>
        <span
          className="bg-secondary text-white w-7 h-7 rounded-full flex items-center justify-center 
                     transition-colors group-hover:bg-primary"
        >
          <i className="fas fa-arrow-right text-xs"></i>
        </span>
      </div>
    </a>
  );
}