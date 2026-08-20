import { educationData } from '../data/educationData';

export function Education() {
  return (
    <section id="formacao" className="py-16 bg-beige dark:bg-[#0F0A1A] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-primary dark:text-[#A78BFA] mb-10 relative inline-block">
          Formação Acadêmica
          <span className="block w-12 h-1 bg-secondary dark:bg-[#6C3CB0] absolute -bottom-2 left-0 rounded"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationData.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-[#1A1128] rounded-xl p-6 shadow-[0_4px_16px_rgba(10,59,76,0.06)] dark:shadow-[0_4px_16px_rgba(45,27,105,0.3)]
                         border border-card-border dark:border-[#3D2A6B] hover:-translate-y-1 transition-all duration-300"
            >
              <h4 className="text-lg font-bold text-primary dark:text-[#C4B5FD]">{item.title}</h4>
              <p className="text-sm text-[#7a4a3a] dark:text-gray-400">{item.institution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}