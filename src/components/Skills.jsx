export function Skills() {
  const techSkills = [
    'HTML5 / CSS3',
    'JavaScript (ES6+)',
    'React',
    'Node.js / Express',
    'SQL / MongoDB',
    'Git / GitHub',
    'Pacote Office',
    'Operação CNC',
    'Atendimento ao Público',
    'Inglês Intermediário',
  ];

  const softSkills = ['Adaptabilidade', 'Proatividade', 'Trabalho em equipe', 'Organização', 'Fácil aprendizado'];

  return (
    <section id="habilidades" className="py-16 bg-beige dark:bg-[#0F0A1A] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-primary dark:text-[#A78BFA] text-center mb-10 relative">
          Habilidades Técnicas
          <span className="block w-12 h-1 bg-secondary dark:bg-[#6C3CB0] mx-auto mt-2 rounded"></span>
        </h2>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {techSkills.map((skill) => (
            <span
              key={skill}
              className="bg-white dark:bg-[#1A1128] px-6 py-2.5 rounded-full text-sm font-medium 
                         border border-card-border dark:border-[#3D2A6B] text-card-text dark:text-gray-200
                         hover:bg-primary hover:text-white dark:hover:bg-[#6C3CB0] transition-colors cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-semibold text-center text-primary dark:text-[#A78BFA] mb-6">Soft Skills</h3>

        <div className="flex flex-wrap gap-4 justify-center">
          {softSkills.map((skill) => (
            <span
              key={skill}
              className="bg-white dark:bg-[#1A1128] px-6 py-2.5 rounded-full text-sm font-medium 
                         border border-card-border dark:border-[#3D2A6B] text-card-text dark:text-gray-200
                         hover:bg-primary hover:text-white dark:hover:bg-[#6C3CB0] transition-colors cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}