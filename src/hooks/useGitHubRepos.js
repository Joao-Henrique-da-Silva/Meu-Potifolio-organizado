import { useState, useEffect } from 'react';

export function useGitHubRepos(username = 'Joao-Henrique-da-Silva') {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`)
      .then((res) => {
        if (!res.ok) throw new Error('Erro ao buscar repositórios');
        return res.json();
      })
      .then((data) => {
        const filtered = data.filter((repo) => repo.description || repo.name.includes('projeto'));
        setRepos(filtered);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [username]);

  return { repos, loading, error };
}
