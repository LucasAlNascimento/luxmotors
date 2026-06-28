import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { getCars } from "../../services/cars";
import CarCard from "../CarCard";
import { Car } from "../../interfaces/car";

export default function FeaturedCars() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["featuredCars"],
    queryFn: () => getCars(),
  });

  const cars = data?.content?.slice(0, 3) ?? [];

  return (
    <section className="w-full bg-gray-100 mt-14 py-24 px-6 md:px-12 lg:px-24 border-b border-gray-300/40">
      <div className="max-w-screen-2xl mx-auto flex flex-col gap-12">
        {/* Header da seção */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-[10px] tracking-[0.3em] uppercase text-gray-400 font-medium">
              Frota Exclusiva
            </span>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900 font-display">
              Destaques da Temporada
            </h2>
          </div>
          <Link
            to="/catalog"
            className="text-[10px] tracking-[0.25em] uppercase text-gray-600 hover:text-black transition-colors duration-300 border-b border-gray-400 pb-1 w-fit group flex items-center gap-1 font-medium"
          >
            Ver todos os modelos
            <span className="transform group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </Link>
        </div>

        {/* Grid de Carros */}
        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="w-full h-[370px] bg-gray-200 animate-pulse border border-gray-300/60"
              />
            ))}
          </div>
        )}

        {isError && (
          <div className="w-full py-12 text-center">
            <p className="text-sm tracking-[0.2em] uppercase text-red-500">
              Erro ao carregar veículos em destaque.
            </p>
          </div>
        )}

        {!isLoading && !isError && cars.length === 0 && (
          <div className="w-full py-12 text-center">
            <p className="text-[10px] tracking-[0.25em] uppercase text-gray-400">
              Nenhum veículo em destaque no momento.
            </p>
          </div>
        )}

        {!isLoading && !isError && cars.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cars.map((car: Car) => (
              <CarCard key={car.id} carro={car} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
