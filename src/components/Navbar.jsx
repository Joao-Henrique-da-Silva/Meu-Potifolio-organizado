import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { DarkModeToggle } from './DarkModeToggle';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
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

  const links = [
    { id: 'sobre', label: 'Sobre' },
    { id: 'experiencia', label: 'Experiência' },
    { id: 'formacao', label: 'Formação' },
    { id: 'cursos', label: 'Cursos' },
    { id: 'habilidades', label: 'Habilidades' },
    { id: 'projetos', label: 'Projetos' },
    { id: 'contato', label: 'Contato' },
  ];

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  // Fundo do navbar: vermelho no claro, roxo escuro no escuro
  const navBg = isDark ? 'bg-[#1A0A3E]/95' : 'bg-[#8B0000]';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${navBg} backdrop-blur-md shadow-lg py-3.5 transition-colors duration-300`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <div className="text-white font-bold text-xl tracking-tight">
          João<span className={isDark ? 'text-[#A78BFA]' : 'text-[#FFB347]'}>Henrique</span>
        </div>

        <div className="flex items-center gap-4">
          <ul className="hidden md:flex gap-7">
            {links.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollTo(link.id)}
                  className={`text-white/90 text-sm font-medium transition-colors ${
                    isDark ? 'hover:text-[#A78BFA]' : 'hover:text-[#FFB347]'
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <DarkModeToggle />

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white text-2xl"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className={`md:hidden ${navBg} px-6 py-5 flex flex-col gap-4 border-t border-white/10`}>
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`text-white/90 text-left text-sm font-medium transition-colors ${
                isDark ? 'hover:text-[#A78BFA]' : 'hover:text-[#FFB347]'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}