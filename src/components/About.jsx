export function About() {
  return (
    <section id="sobre" className="py-16 bg-beige dark:bg-[#0F0A1A] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-primary dark:text-[#A78BFA] mb-10 relative inline-block">
          Sobre mim
          <span className="block w-12 h-1 bg-secondary dark:bg-[#6C3CB0] absolute -bottom-2 left-0 rounded"></span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10 items-center">
          <div className="bg-gradient-to-br from-primary via-secondary to-[#E65C00] dark:from-[#1A0A3E] dark:via-[#3D1B6B] dark:to-[#6C3CB0] rounded-2xl p-8 text-white text-center shadow-xl min-h-[200px] flex flex-col justify-center transition-colors duration-300">
            <i className="fas fa-user-astronaut text-6xl text-[#FFD700] dark:text-[#A78BFA] mb-4"></i>
            <h3 className="text-2xl font-bold">João Henrique</h3>
            <p className="opacity-90">Full Stack em desenvolvimento</p>
          </div>

          <div className="md:col-span-2 space-y-4 text-card-text dark:text-gray-300">
            <p>
              Profissional com experiência diversificada nas áreas industrial, educacional e de saúde pública. 
              Atuei em linha de produção, operação de máquinas CNC, docência no ensino infantil e atendimento ao público no SUS.
            </p>
            <p>
              Atualmente em transição para a área de tecnologia, com foco em <strong className="text-primary dark:text-[#A78BFA]">desenvolvimento full stack</strong>. 
              Cursando <strong className="text-primary dark:text-[#A78BFA]">Engenharia da Computação</strong> (UNIVESP) e formação complementar no curso <strong className="text-primary dark:text-[#A78BFA]">DEVquest 2.0</strong>.
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