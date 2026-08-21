import { useState, useEffect } from 'react';

export function About() {
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

  // Gradiente dinâmico para o card do About
  const cardGradient = isDark
    ? 'bg-gradient-to-br from-[#1A0A3E] via-[#3D1B6B] to-[#6C3CB0]'  // Escuro: roxo
    : 'bg-gradient-to-br from-[#E88A5A] via-[#F0A880] to-[#F5C4A8]';   // Claro: laranja/coral mais claro

  return (
    <section id="sobre" className="py-16 bg-beige dark:bg-white dark:text-bg transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-primary dark:text-dark-primary mb-10 relative inline-block">
          Sobre mim
          <span className="block w-12 h-1 bg-secondary dark:bg-dark-secondary absolute -bottom-2 left-0 rounded"></span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10 items-center">
          {/* Card com gradiente dinâmico */}
          <div className={`${cardGradient} rounded-2xl p-8 text-white text-center shadow-xl min-h-50 flex flex-col justify-center transition-all duration-700`}>
            <i className={`fas fa-user-astronaut text-6xl mb-4 transition-colors duration-300 ${
              isDark ? 'text-dark-primary' : 'text-[#FFD700]'
            }`}></i>
            <h3 className="text-2xl font-bold">João Henrique</h3>
            <p className="opacity-90">Full Stack em desenvolvimento</p>
          </div>

          <div className="md:col-span-2 space-y-4 text-card-text dark:text-dark-text">
            <p>
              Profissional com experiência diversificada nas áreas industrial, educacional e de saúde pública. 
              Atuei em linha de produção, operação de máquinas CNC, docência no ensino infantil e atendimento ao público no SUS.
            </p>
            <p>
              Atualmente em transição para a área de tecnologia, com foco em <strong className="text-primary dark:text-dark-primary">desenvolvimento full stack</strong>. 
              Cursando <strong className="text-primary dark:text-dark-primary">Engenharia da Computação</strong> (UNIVESP) e formação complementar no curso <strong className="text-primary dark:text-dark-primary">DEVquest 2.0</strong>.
            </p>
            <p>
              Combino disciplina de chão de fábrica e atendimento ao público com tecnologia, buscando estágio 
              para aplicar conhecimentos em front-end, back-end e projetos reais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}