import { FaHeart } from 'react-icons/fa';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-footer-bg dark:bg-gray-950 text-white/80 text-center py-6 text-sm transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        &copy; {currentYear} João Henrique da Silva · Feito com <FaHeart className="inline text-red-500 mx-1" /> e React/Tailwind
        <br />
        <small className="opacity-70">Última atualização: abril {currentYear}</small>
      </div>
    </footer>
  );
}