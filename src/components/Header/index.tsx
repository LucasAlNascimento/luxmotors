import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex fixed top-0 z-50 justify-between items-center w-full p-5 bg-gray-200 shadow-md md:px-11">
      <div className="flex w-full items-center m-auto">
        <Link to="/" className="py-2">
          <img src="/assets/logos/logolux.svg" alt="Logo Luxmotors" className="w-44 cursor-pointer" />
        </Link>
      </div>

      <div className="flex items-center gap-8">
        <Link
          to="/login"
          className="text-[10px] tracking-[0.3em] uppercase text-gray-500 hover:text-gray-900 transition-colors duration-300"
        >
          Entrar
        </Link>

        <div className="w-px h-4 bg-gray-400/60" />

        <button className="text-[10px] tracking-[0.3em] uppercase text-gray-500 hover:text-gray-900 transition-colors duration-300 flex items-center gap-2 group">
          <span>Favoritos</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="w-4 h-4 group-hover:stroke-gray-900 transition-colors duration-300"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
        </button>
      </div>
    </header>
  );
}