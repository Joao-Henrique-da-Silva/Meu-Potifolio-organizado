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
    <section id="habilidades" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-primary text-center mb-10 relative">
          Habilidades Técnicas
          <span className="block w-12 h-1 bg-secondary mx-auto mt-2 rounded"></span>
        </h2>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {techSkills.map((skill) => (
            <span
              key={skill}
              className="bg-white px-6 py-2.5 rounded-full text-sm font-medium 
                         border border-card-border text-card-text 
                         hover:bg-primary hover:text-white transition-colors cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-semibold text-center text-primary mb-6">Soft Skills</h3>

        <div className="flex flex-wrap gap-4 justify-center">
          {softSkills.map((skill) => (
            <span
              key={skill}
              className="bg-white px-6 py-2.5 rounded-full text-sm font-medium 
                         border border-card-border text-card-text 
                         hover:bg-primary hover:text-white transition-colors cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}