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

  const sectionBg = isDark ? 'bg-[#0F0A1A]' : 'bg-[#FFF8F5]';

  return (
    <section
      id="sobre"
      className={`opacity-0 animate-fade-in delay-200 py-16 ${sectionBg} transition-colors duration-300`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-primary dark:text-dark-primary mb-10 relative inline-block">
          Sobre mim
          <span className="block w-12 h-1 bg-secondary dark:bg-dark-secondary absolute -bottom-2 left-0 rounded"></span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10 items-center">
          <div className={`relative flex flex-col items-center gap-3 p-8 rounded-4xl border-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl group ${
            isDark 
              ? 'border-[#A78BFA]/30 bg-gradient-to-br from-[#2D1B69]/80 via-[#1A0A3E]/80 to-[#3D1B6B]/80 backdrop-blur-md shadow-[0_8px_32px_rgba(167,139,250,0.15)] hover:shadow-[0_8px_40px_rgba(167,139,250,0.25)]' 
              : 'border-[#FFD700]/30 bg-gradient-to-br from-[#FFF8F5]/90 via-[#F5E8E0]/90 to-[#E8D5C8]/90 backdrop-blur-md shadow-[0_8px_32px_rgba(255,215,0,0.10)] hover:shadow-[0_8px_40px_rgba(255,215,0,0.20)]'
          }`}>
            {/* Efeito de brilho superior */}
            <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full blur-2xl transition-all duration-500 ${
              isDark ? 'bg-[#A78BFA]/20 group-hover:bg-[#A78BFA]/30' : 'bg-[#FFD700]/20 group-hover:bg-[#FFD700]/30'
            }`}></div>
            
            <div className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 ${
              isDark 
                ? 'bg-[#A78BFA]/20 shadow-[0_0_30px_rgba(167,139,250,0.2)]' 
                : 'bg-[#FFD700]/20 shadow-[0_0_30px_rgba(255,215,0,0.15)]'
            }`}>
              <i className={`fas fa-user-astronaut text-4xl transition-colors duration-300 ${
                isDark ? 'text-dark-primary' : 'text-[#FFD700]'
              }`}></i>
            </div>
            
            <h3 className={`text-2xl font-bold transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-[#5C0000]'
            }`}>
              João Henrique
            </h3>
            
            <p className={` text-center opacity-90 transition-colors duration-300 ${
              isDark ? 'text-[#C4B5FD]' : 'text-[#8B6B4A]'
            }`}>
              Full Stack em desenvolvimento
            </p>
            
            <div className={`w-12 h-1 rounded-full mt-2 transition-all duration-300 ${
              isDark ? 'bg-dark-primary' : 'bg-[#FFD700]'
            }`}></div>
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