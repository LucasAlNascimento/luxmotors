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
      {isLoading && <div className="m-auto">Carregando carro...</div>}

      {!isLoading && !carro && (
        <div className="m-auto text-center text-gray-500">
          <p className="text-xl font-semibold">Carro não encontrado</p>
          <p className="text-sm">Pode ter sido removido 🚗</p>
        </div>
      )}

      {!isLoading && carro && (
        <div className="grid w-full gap-10 items-center lg:grid-cols-2">
          <div className="w-full h-[400px] rounded-3xl overflow-hidden shadow-xl">
            <img
              src={carro.imgUrl}
              alt={`${carro.marca} ${carro.modelo}`}
              className="w-full h-full object-cover hover:scale-105 transition duration-700"
            />
          </div>

          <div className="flex flex-col gap-6">
						<div className="flex flex-col gap-2">
							<h1 className="text-4xl font-bold">
								{carro.marca} {carro.modelo}
							</h1>

							<p className="text-gray-600 leading-relaxed">
								{carro.descricao}
							</p>
						</div>

            <div className="flex flex-wrap gap-3 text-sm">
              <span className="px-5 py-2 bg-gray-200 rounded-full">
                Ano: {carro.ano}
              </span>

              <span className="px-5 py-2 bg-gray-200 rounded-full">
                Cor: {carro.cor}
              </span>

              <span
                className={`px-5 py-2 rounded-full ${
                  carro.disponivel
                    ? "bg-green-200 text-green-800"
                    : "bg-red-200 text-red-800"
                }`}
              >
                {carro.disponivel ? "Disponível" : "Indisponível"}
              </span>
            </div>

						<p className="mt-4 text-2xl font-bold text-green-700">
              {formatPrice(carro.precoDiaria)} / dia
            </p>

            <button
              disabled={!carro.disponivel}
              className={`mt-4 h-14 rounded-xl transition ${
                carro.disponivel
                  ? "w-44 bg-black text-white hover:bg-yellow-500 hover:text-black hover:scale-105"
                  : "w-44 bg-gray-400 text-gray-200 cursor-not-allowed"
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