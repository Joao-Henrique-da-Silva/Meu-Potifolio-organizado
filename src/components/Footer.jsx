import { FaHeart } from 'react-icons/fa';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-footer-bg text-white/80 text-center py-6 text-sm">
      <div className="max-w-6xl mx-auto px-6">
        &copy; {currentYear} João Henrique da Silva · Feito com <FaHeart className="inline text-red-500 mx-1" /> e React/Tailwind
        <br />
        <small className="opacity-70">Última atualização: abril {currentYear}</small>
      </div>
    </footer>
  );
}