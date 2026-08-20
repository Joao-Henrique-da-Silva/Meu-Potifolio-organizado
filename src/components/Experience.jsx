import { experiences } from '../data/experienceData';

export function Experience() {
  return (
    <section id="experiencia" className="py-16 bg-section-bg dark:bg-gray-900/50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-primary dark:text-white text-center mb-10 relative">
          Experiência Profissional
          <span className="block w-12 h-1 bg-secondary mx-auto mt-2 rounded"></span>
        </h2>
        <div className="flex flex-col gap-6">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-[0_4px_16px_rgba(10,59,76,0.08)] dark:shadow-none border-l-4 border-secondary transition-colors duration-300"
            >
              <div className="flex flex-wrap justify-between items-start gap-2">
                <h3 className="text-lg font-bold text-primary dark:text-white">{exp.title}</h3>
                <span className="text-sm text-[#7a4a3a] dark:text-gray-400">{exp.date}</span>
              </div>
              <p className="font-medium text-secondary text-sm">{exp.company}</p>
              <p className="text-sm text-card-text dark:text-gray-300 mt-1">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}