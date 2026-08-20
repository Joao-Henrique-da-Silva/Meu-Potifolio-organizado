import { coursesData } from '../data/coursesData';

export function Courses() {
  return (
    <section id="cursos" className="py-16 bg-section-bg dark:bg-[#1A1128] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-primary dark:text-[#A78BFA] text-center mb-10 relative">
          Cursos Complementares
          <span className="block w-12 h-1 bg-secondary dark:bg-[#6C3CB0] mx-auto mt-2 rounded"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {coursesData.map((course) => (
            <div
              key={course.id}
              className="bg-white dark:bg-[#1A1128] rounded-xl p-6 shadow-[0_4px_16px_rgba(10,59,76,0.06)] dark:shadow-[0_4px_16px_rg