import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getCarById } from "../../services/cars";

export default function CarDetail() {
  const { id } = useParams();

  const { data: carro, isLoading } = useQuery({
    queryKey: ["car", id],
    queryFn: () => getCarById(id!),
    enabled: !!id,
  });

  const formatPrice = (value: number) =>
    value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

  return (
    <div className="w-full max-w-screen-2xl mx-auto py-24 min-h-screen flex px-10">
      {isLoading && (
        <div className="m-auto text-xs tracking-[0.3em] uppercase text-gray-400">
          Carregando...
        </div>
      )}

      {!isLoading && !carro && (
        <div className="m-auto text-center text-gray-500">
          <p className="text-2xl font-light tracking-widest">Veículo não encontrado</p>
          <p className="text-xs tracking-[0.2em] uppercase text-gray-400 mt-2">Pode ter sido removido</p>
        </div>
      )}

      {!isLoading && carro && (
        <div className="grid w-full gap-8 items-center lg:grid-cols-2">

          <div className="w-full h-[440px] rounded-sm overflow-hidden shadow-lg">
            <img
              src={carro.imgUrl}
              alt={`${carro.marca} ${carro.modelo}`}
              className="w-full h-full object-cover hover:scale-105 transition duration-700"
            />
          </div>

          <div className="flex flex-col gap-8">

            <div className="flex flex-col gap-2 border-b border-gray-300/60 pb-4">
              <span className="text-xs tracking-[0.3em] uppercase text-gray-400">
                {carro.marca}
              </span>
              <h1 className="text-4xl font-light tracking-tight text-gray-900">
                {carro.modelo}
              </h1>
              <p className="text-xs tracking-[0.2em] uppercase text-gray-500 mt-1">
                {carro.descricao}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-px bg-gray-300/60">
              <div className="flex flex-col gap-1 bg-gray-200 px-4 py-4">
                <span className="text-[10px] tracking-[0.25em] uppercase text-gray-400">Ano</span>
                <span className="text-sm font-medium text-gray-800">{carro.ano}</span>
              </div>
              <div className="flex flex-col gap-1 bg-gray-200 px-4 py-4">
                <span className="text-[10px] tracking-[0.25em] uppercase text-gray-400">Cor</span>
                <span className="text-sm font-medium text-gray-800">{carro.cor}</span>
              </div>
              <div className="flex flex-col gap-1 bg-gray-200 px-4 py-4">
                <span className="text-[10px] tracking-[0.25em] uppercase text-gray-400">Status</span>
                <span className={`text-sm font-medium ${carro.disponivel ? "text-green-700" : "text-red-600"}`}>
                  {carro.disponivel ? "Disponível" : "Indisponível"}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-[10px] tracking-[0.3em] uppercase text-gray-400">Diária a partir de</span>
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-light text-gray-900">
                  {formatPrice(carro.precoDiaria)} / dia
                </span>
              </div>
            </div>

            <button
              disabled={!carro.disponivel}
              className={`h-14 text-xs tracking-[0.3em] uppercase transition-colors duration-300 ${
                carro.disponivel
                  ? "w-48 bg-black text-white hover:bg-gray-800"
                  : "w-48 bg-gray-400 text-white cursor-not-allowed"
              }`}
            >
              {carro.disponivel ? "Reservar" : "Indisponível"}
            </button>

          </div>
        </div>
      )}
    </div>
  );
}