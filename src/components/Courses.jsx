import { coursesData } from '../data/coursesData';

export function Courses() {
  return (
    <section id="cursos" className="py-16 bg-[#FFF0ED] dark:bg-[#1A1128] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-[#8B0000] dark:text-[#A78BFA] text-center mb-10 relative">
          Cursos Complementares
          <span className="block w-12 h-1 bg-[#CC3300] dark:bg-[#6C3CB0] mx-auto mt-2 rounded"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {coursesData.map((course) => (
            <div
              key={course.id}
              className="bg-white dark:bg-[#1A1128] rounded-xl p-6 shadow-[0_4px_16px_rgba(139,0,0,0.06)] dark:shadow-[0_4px_16px_rgba(45,27,105,0.3)]
                         border border-[#F5E0D8] dark:border-[#3D2A6B] hover:-translate-y-1 transition-all duration-300"
            >
              <h4 className="text-lg font-bold text-[#5C0000] dark:text-[#C4B5FD]">{course.title}</h4>
              <p className="text-sm text-[#7a4a3a] dark:text-gray-400 mb-3">{course.institution}</p>

              {course.badges.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {course.badges.map((badge) => (
                    <span
                      key={badge}
                      className="bg-[#FAE6DF] dark:bg-[#2D1B69] text-[#8B0000] dark:text-[#A78BFA] text-xs font-semibold px-3 py-1 rounded-full transition-colors duration-300"
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