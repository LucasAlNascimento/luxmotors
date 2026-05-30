import { useNavigate } from "react-router-dom";
import { Car } from "../../interfaces/car";

export default function CarCard({ carro }: { carro: Car }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/catalog/${carro.id}`)}
      title="Ver detalhes"
      className="w-full h-fit bg-gray-200 border border-gray-300/60 shadow-sm cursor-pointer group"
    >
      {/* Imagem */}
      <div className="w-full h-64 overflow-hidden">
        <img
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          src={carro.imgUrl}
          alt={`${carro.marca} ${carro.modelo}`}
        />
      </div>

      {/* Info */}
      <div className="flex justify-between items-end px-5 py-4 border-t border-gray-300/60">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] tracking-[0.25em] uppercase text-gray-400">
            {carro.marca}
          </span>
          <h2 className="text-lg font-light tracking-tight text-gray-900">
            {carro.modelo}
          </h2>
        </div>
        <span className="text-[10px] tracking-[0.2em] uppercase text-gray-400 mb-1">
          {carro.ano}
        </span>
      </div>
    </div>
  );
}