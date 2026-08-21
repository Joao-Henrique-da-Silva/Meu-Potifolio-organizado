import { FaGithub, FaEnvelope, FaLinkedinIn } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export function Hero() {
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

  return (
    <section
      id="home"
      className={`pt-32 pb-20 text-white text-center relative transition-all duration-700 ${
        isDark ? 'hero-dark' : 'hero-light'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 drop-shadow-md">
          Olá, sou <span className={isDark ? 'text-dark-primary' : 'text-[#FFD700]'}>João Henrique</span>
        </h1>
        <p className="text-lg md:text-xl opacity-95 max-w-2xl mx-auto mb-8">
          Técnico em Agente Comunitário de Saúde · Graduando em Engenharia da Computação · Full Stack em formação
        </p>
        <a
          href="#contato"
          className={`inline-block text-white px-8 py-3 rounded-full font-semibold 
                     transition-all hover:scale-105 shadow-lg ${
                       isDark 
                         ? 'bg-dark-secondary hover:bg-dark-accent shadow-dark-secondary/40' 
                         : 'bg-accent hover:bg-[#FF4500] shadow-accent/40'
                     }`}
        >
          Vamos conversar
        </a>
        <div className="flex justify-center gap-5 mt-8">
          <a
            href="https://github.com/Joao-Henrique-da-Silva"
            target="_blank"
            rel="noopener noreferrer"
            className={`w-12 h-12 bg-white/15 rounded-full flex items-center justify-center text-xl 
                       transition-colors ${
                         isDark 
                           ? 'hover:bg-dark-primary/30' 
                           : 'hover:bg-[#FFD700]/30'
                       }`}
          >
            <FaGithub />
          </a>
          <a
            href="mailto:joaohs22@gmail.com"
            className={`w-12 h-12 bg-white/15 rounded-full flex items-center justify-center text-xl 
                       transition-colors ${
                         isDark 
                           ? 'hover:bg-dark-primary/30' 
                           : 'hover:bg-[#FFD700]/30'
                       }`}
          >
            <FaEnvelope />
          </a>
          <a
            href="#"
            className={`w-12 h-12 bg-white/15 rounded-full flex items-center justify-center text-xl 
                       transition-colors ${
                         isDark 
                           ? 'hover:bg-dark-primary/30' 
                           : 'hover:bg-[#FFD700]/30'
                       }`}
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      <style>{`
        .hero-light {
          background: linear-gradient(135deg, #8B0000 0%, #CC3300 50%, #E65C00 100%);
        }
        .hero-dark {
          background: linear-gradient(135deg, #1A0A3E 0%, #3D1B6B 50%, #6C3CB0 100%);
        }
        .hero-light, .hero-dark {
          transition: background 0.7s ease;
        }
      `}</style>
    </section>
  );
}