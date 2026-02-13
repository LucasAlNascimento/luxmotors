import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function BackButton({ className = "" }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      aria-label="Voltar"
      className={`
				absolute top-24 left-10
        flex items-center gap-2
        text-gray-600 hover:text-black
        font-medium
        transition
        ${className}
      `}
    >
      <FontAwesomeIcon icon={faArrowLeft} />
      Voltar
    </button>
  );
}