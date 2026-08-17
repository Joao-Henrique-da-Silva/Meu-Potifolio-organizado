import { useState } from 'react';
import { useGitHubRepos } from '../hooks/useGitHubRepos';
import { ProjectCard } from './ProjectCard';

export function Projects() {
  const { repos, loading, error } = useGitHubRepos();
  const [search, setSearch] = useState('');
  const [filterLang, setFilterLang] = useState('');

  const languages = ['Todas', ...new Set(repos.map((r) => r.language).filter(Boolean))];

  const filteredRepos = repos.filter((repo) => {
    const matchName = repo.name.toLowerCase().includes(search.toLowerCase());
    const matchLang = filterLang === '' || filterLang === 'Todas' || repo.language === filterLang;
    return matchName && matchLang;
  });

  if (loading) {
    return (
      <section id="projetos" className="py-16 bg-section-bg min-h-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin text-4xl text-secondary">🌀</div>
          <p className="mt-4 text-primary font-medium">Carregando projetos...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projetos" className="py-16 bg-section-bg">
        <div className="max-w-6xl mx-auto px-6 text-center text-red-600">
          <p>Erro ao carregar projetos: {error}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="projetos" className="py-16 bg-section-bg">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-primary text-center mb-10 relative">
          Meus Projetos no GitHub
          <span className="block w-12 h-1 bg-secondary mx-auto mt-2 rounded"></span>
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-8">
          <input
            type="text"
            placeholder="🔍 Buscar por nome..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full sm:w-64 px-4 py-2 rounded-xl border border-card-border 
                       focus:outline-none focus:border-secondary bg-white"
          />
          <select
            value={filterLang}
            onChange={(e) => setFilterLang(e.target.value)}
            className="w-full sm:w-48 px-4 py-2 rounded-xl border border-card-border 
                       focus:outline-none focus:border-secondary bg-white"
          >
            {languages.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredRepos.map((repo) => (
            <ProjectCard key={repo.id} {...repo} />
          ))}
        </div>

        {filteredRepos.length === 0 && (
          <p className="text-center text-[#7a4a3a] mt-10">Nenhum projeto encontrado.</p>
        )}
      </div>
    </section>
  );
}