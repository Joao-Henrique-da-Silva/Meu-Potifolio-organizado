import { FaHeart } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export function Footer() {
  const [isDark, setIsDark] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    
    observer.observe(document.documentElement, { 
      attributes: true, 
      attributeFilter: ['class'] 
    });
    
    setIsDark(document.documentElement.classList.contains('dark'));
    
    return () => observer.disconnect();
  }, []);

  const footerBg = isDark ? 'bg-dark-bg' : 'bg-footer-bg';
  const heartColor = isDark ? 'text-dark-primary' : 'text-red-500';

  return (
    <footer className={`${footerBg} text-white/80 text-center py-6 text-sm transition-colors duration-300`}>
      <div className="max-w-6xl mx-auto px-6">
        &copy; {currentYear} João Henrique da Silva · Feito com{' '}
        <FaHeart className={`inline ${heartColor} mx-1 transition-colors duration-300`} />{' '}
        e React/Tailwind
        <br />
        <small className="opacity-70">Última atualização: abril {currentYear}</small>
      </div>
    </footer>
  );
}