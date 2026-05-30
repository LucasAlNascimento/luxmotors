import { useNavigate } from "react-router-dom";

export default function BackButton({ className = "" }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      aria-label="Voltar"
      className={`
        absolute top-24 left-10
        flex items-center gap-3
        text-[10px] tracking-[0.3em] uppercase text-gray-400
        hover:text-gray-900 transition-colors duration-300
        group
        ${className}
      `}
    >
      <span className="w-6 h-px bg-gray-400 group-hover:w-8 group-hover:bg-gray-900 transition-all duration-300" />
      Voltar
    </button>
  );
}