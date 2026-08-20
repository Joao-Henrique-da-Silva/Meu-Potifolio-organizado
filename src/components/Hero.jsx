import { FaGithub, FaEnvelope, FaLinkedinIn } from 'react-icons/fa';

export function Hero() {
  return (
    <section
      id="home"
      className="pt-32 pb-20 text-white text-center"
      style={{
        background: 'linear-gradient(135deg, #0A3B4C 0%, #1A6B7A 50%, #2B6CB0 100%)'
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 drop-shadow-md">
          Olá, sou <span className="text-[#A0D2E0]">João Henrique</span>
        </h1>
        <p className="text-lg md:text-xl opacity-95 max-w-2xl mx-auto mb-8">
          Técnico em Agente Comunitário de Saúde · Graduando em Engenharia da Computação · Full Stack em formação
        </p>
        <a
          href="#contato"
          className="inline-block bg-[#38B2AC] text-white px-8 py-3 rounded-full font-semibold 
                     transition-transform hover:scale-105 hover:bg-[#1A6B7A] shadow-lg shadow-[#0A3B4C]/40"
        >
          Vamos conversar
        </a>
        <div className="flex justify-center gap-5 mt-8">
          <a
            href="https://github.com/Joao-Henrique-da-Silva"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/15 rounded-full flex items-center justify-center text-xl 
                       hover:bg-[#38B2AC]/30 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:joaohs22@gmail.com"
            className="w-12 h-12 bg-white/15 rounded-full flex items-center justify-center text-xl 
                       hover:bg-[#38B2AC]/30 transition-colors"
          >
            <FaEnvelope />
          </a>
          <a
            href="#"
            className="w-12 h-12 bg-white/15 rounded-full flex items-center justify-center text-xl 
                       hover:bg-[#38B2AC]/30 transition-colors"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </section>
  );
}