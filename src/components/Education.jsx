import { educationData } from '../data/educationData';

export function Education() {
  return (
    <section id="formacao" className="py-16 bg-beige">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-primary mb-10 relative inline-block">
          Formação Acadêmica
          <span className="block w-12 h-1 bg-secondary absolute -bottom-2 left-0 rounded"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl p-6 shadow-[0_4px_16px_rgba(10,59,76,0.06)] 
                         border border-card-border hover:-translate-y-1 transition-transform"
            >
              <h4 className="text-lg font-bold text-primary">{item.title}</h4>
              <p className="text-sm text-[#7a4a3a]">{item.institution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}