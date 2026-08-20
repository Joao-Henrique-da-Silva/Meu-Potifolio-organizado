import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

export function DarkModeToggle() {
  const [isDark, setIsDark] = useState(() => {
    // Verifica se o usuário já tinha uma preferência salva
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    // Se não tiver salvo, usa a preferência do sistema
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    // Aplica ou remove a classe 'dark' no html
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
      aria-label="Alternar tema"
    >
      {isDark ? <FaSun className="text-yellow-400" /> : <FaMoon />}
    </button>
  );
}