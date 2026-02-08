import { useQuery } from "@tanstack/react-query";
import CarCard from "../CarCard";
import { getCars } from "../../services/cars";
import { useSearchParams } from "react-router-dom";

export default function Cars() {
  const [searchParams] = useSearchParams();

  const marcaSearchParam = searchParams.get("marca") ?? "";

  const { data, isLoading } = useQuery({
    queryKey: ["cars", marcaSearchParam],
    queryFn: () => getCars(marcaSearchParam),
  });

  if (isLoading) return <p>Carregando carros...</p>;

  if (!data?.content.length) return <p>Nenhum carro disponível.</p>;

  return (
    <div className="grid grid-cols-1 gap-y-16 w-full max-w-screen-2xl place-items-center py-36 lg:grid-cols-2">
      {data.content.map((carro) => (
        <CarCard key={carro.id} carro={carro} />
      ))}
    </div>
  );
}
