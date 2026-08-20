import { FaGithub, FaEnvelope, FaLinkedinIn } from 'react-icons/fa';

export function Hero() {
  return (
    <section
      id="home"
      className="pt-32 pb-20 text-white text-center relative transition-colors duration-300"
      style={{
        background: 'linear-gradient(135deg, #8B0000 0%, #CC3300 50%, #E65C00 100%)'
      }}
    >
      {/* Overlay para o modo escuro - fica sobre o gradiente */}
      <div className="absolute inset-0 bg-black/0 dark:bg-black/60 transition-colors duration-300"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 drop-shadow-md">
          Olá, sou <span className="text-[#FFD700] dark:text-[#A78BFA] transition-colors duration-300">João Henrique</span>
        </h1>
        <p className="text-lg md:text-xl opacity-95 max-w-2xl mx-auto mb-8">
          Técnico em Agente Comunitário de Saúde · Graduando em Engenharia da Computação · Full Stack em formação
        </p>
        <a
          href="#contato"
          className="inline-block bg-[#FF6B35] dark:bg-[#6C3CB0] text-white px-8 py-3 rounded-full font-semibold 
                     transition-all hover:scale-105 hover:bg-[#FF4500] dark:hover:bg-[#8B5CF6] 
                     shadow-lg shadow-[#FF6B35]/40 dark:shadow-[#6C3CB0]/40"
        >
          Vamos conversar
        </a>
        <div className="flex justify-center gap-5 mt-8">
          <a
            href="https://github.com/Joao-Henrique-da-Silva"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/15 rounded-full flex items-center justify-center text-xl 
                       hover:bg-[#FFD700]/30 dark:hover:bg-[#A78BFA]/30 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:joaohs22@gmail.com"
            className="w-12 h-12 bg-white/15 rounded-full flex items-center justify-center text-xl 
                       hover:bg-[#FFD700]/30 dark:hover:bg-[#A78BFA]/30 transition-colors"
          >
            <FaEnvelope />
          </a>
          <a
            href="#"
            className="w-12 h-12 bg-white/15 rounded-full flex items-center justify-center text-xl 
                       hover:bg-[#FFD700]/30 dark:hover:bg-[#A78BFA]/30 transition-colors"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </section>
  );
}