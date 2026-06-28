import { useQuery } from "@tanstack/react-query";
import CarCard from "../CarCard";
import { getCars } from "../../services/cars";
import { useSearchParams } from "react-router-dom";
import { Car } from "../../interfaces/car";

export default function Cars() {
  const [searchParams] = useSearchParams();

  const filters = {
    marcaModelo: searchParams.get("marcaModelo") ?? "",
    ano: searchParams.get("ano") ?? "",
    precoDiaria: searchParams.get("precoDiaria") ?? "",
  };

  const { data, isLoading } = useQuery({
    queryKey: ["cars", filters],
    queryFn: () => getCars(filters),
  });

  const cars = data?.content ?? [];

  return (
    <div className="w-full mx-auto py-36 min-h-screen flex px-10">

      {isLoading && (
        <div className="m-auto text-[10px] tracking-[0.3em] uppercase text-gray-400">
          Carregando...
        </div>
      )}

      {!isLoading && !cars.length && (
        <div className="m-auto text-center flex flex-col gap-2">
          <p className="text-3xl font-light tracking-tight text-gray-900">Nenhum resultado</p>
          <p className="text-[10px] tracking-[0.25em] uppercase text-gray-400">Tente ajustar os filtros</p>
        </div>
      )}

      {!isLoading && cars.length > 0 && (
        <div className="grid grid-cols-1 gap-6 w-full items-start lg:grid-cols-4">
          {cars.map((carro: Car) => (
            <CarCard key={carro.id} carro={carro} />
          ))}
        </div>
      )}
    </div>
  );
}