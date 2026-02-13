import { useQuery } from "@tanstack/react-query";
import CarCard from "../CarCard";
import { getCars } from "../../services/cars";
import { useSearchParams } from "react-router-dom";

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
		<div className="w-full max-w-screen-2xl mx-auto py-36 min-h-screen flex">
			{isLoading && (
				<div className="m-auto">Carregando carros...</div>
			)}

			{!isLoading && !cars.length && (
				<div className="m-auto text-center text-gray-500">
					<p className="text-xl font-semibold">Nenhum carro encontrado</p>
					<p className="text-sm">Tente alterar os filtros 🔍</p>
				</div>
			)}

			{!isLoading && cars.length > 0 && (
				<div className="grid grid-cols-1 gap-y-16 w-full place-items-center lg:grid-cols-2">
					{cars.map((carro) => (
						<CarCard key={carro.id} carro={carro} />
					))}
				</div>
			)}
		</div>
	);
}
