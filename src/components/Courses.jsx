import { coursesData } from '../data/coursesData';

export function Courses() {
  return (
    <section id="cursos" className="py-16 bg-section-bg">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-primary text-center mb-10 relative">
          Cursos Complementares
          <span className="block w-12 h-1 bg-secondary mx-auto mt-2 rounded"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {coursesData.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl p-6 shadow-[0_4px_16px_rgba(10,59,76,0.06)] 
                         border border-card-border hover:-translate-y-1 transition-transform"
            >
              <h4 className="text-lg font-bold text-primary">{course.title}</h4>
              <p className="text-sm text-[#7a4a3a] mb-3">{course.institution}</p>

              {course.badges.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {course.badges.map((badge) => (
                    <span
                      key={badge}
                      className="bg-badge-bg text-primary text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}