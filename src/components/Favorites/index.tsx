import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { listFavoritesDetailed, removeFavorite } from "../../services/favorites";
import { getUsuarioLogado } from "../../services/auth";
import { toast } from "sonner";
import { Car } from "../../interfaces/car";
import { useState } from "react";

export default function Favorites() {
	const usuario = getUsuarioLogado();
	const queryClient = useQueryClient();
	const [removingId, setRemovingId] = useState<string | null>(null);

	const { data: favoritos = [], isLoading, isFetching } = useQuery({
		queryKey: ["favorites-detailed", usuario?.id],
		queryFn: () => listFavoritesDetailed(usuario!.id),
		enabled: !!usuario?.id,
		staleTime: 0,
		refetchOnMount: true,
	});

	const isReady = !isLoading && !isFetching;

	const { mutate: handleRemove } = useMutation({
		mutationFn: (carId: string) => {
			setRemovingId(carId);
			return removeFavorite(usuario!.id, carId);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["favorites-detailed", usuario?.id] });
			queryClient.invalidateQueries({ queryKey: ["favorites", usuario?.id] });
			toast.success("Removido dos favoritos");
		},
		onError: () => {
			toast.error("Erro ao remover favorito");
		},
		onSettled: () => {
			setRemovingId(null);
		},
	});

	const formatPrice = (value: number) =>
		value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

	return (
		<div className="w-full mx-auto py-24 min-h-screen px-10">

			<div className="flex flex-col gap-2 border-b border-gray-300/60 pb-8 mb-2 mt-16">
				<h1 className="text-4xl font-light tracking-tight text-gray-900">Favoritos</h1>
			</div>

			{!isReady && (
				<div className="text-xs tracking-[0.3em] uppercase text-gray-400 mt-8">
					Carregando...
				</div>
			)}

			{isReady && favoritos.length === 0 && (
				<div className="flex flex-col items-center justify-center py-24 gap-4 text-center">
					<p className="text-2xl font-light tracking-widest text-gray-500">Nenhum favorito ainda</p>
					<p className="text-xs tracking-[0.2em] uppercase text-gray-400">
						Explore o catálogo e salve os veículos que mais te interessam
					</p>
					<Link
						to="/catalog"
						className="mt-4 h-12 px-8 bg-black text-white text-[10px] tracking-[0.3em] uppercase hover:bg-gray-800 transition-colors duration-300 flex items-center"
					>
						Ver catálogo
					</Link>
				</div>
			)}

			{isReady && favoritos.length > 0 && (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-300/60">
					{favoritos.map((carro: Car) => (
						<div key={carro.id} className="bg-gray-200 flex flex-col">
							<Link to={`/catalog/${carro.id}`} className="overflow-hidden">
								<img
									src={carro.imgUrl}
									alt={`${carro.marca} ${carro.modelo}`}
									className="w-full h-56 object-cover hover:scale-105 transition duration-700"
								/>
							</Link>

							<div className="flex flex-col gap-4 p-6 flex-1">
								<div className="flex justify-between items-start">
									<div className="flex flex-col gap-1">
										<span className="text-[10px] tracking-[0.25em] uppercase text-gray-400">{carro.marca}</span>
										<Link
											to={`/catalog/${carro.id}`}
											className="text-lg font-light tracking-tight text-gray-900 hover:text-gray-600 transition-colors"
										>
											{carro.modelo}
										</Link>
									</div>

									<button
										onClick={() => handleRemove(carro.id)}
										disabled={removingId === carro.id}
										className="text-gray-400 hover:text-gray-900 transition-colors duration-300 disabled:opacity-50"
										title="Remover dos favoritos"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="currentColor"
											className="w-5 h-5"
										>
											<path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
										</svg>
									</button>
								</div>

								<div className="flex justify-between items-end mt-auto">
									<div className="flex flex-col gap-1">
										<span className="text-[10px] tracking-[0.25em] uppercase text-gray-400">Diária</span>
										<span className="text-sm font-light text-gray-900">{formatPrice(carro.precoDiaria)}</span>
									</div>
									<span className={`text-[10px] tracking-[0.2em] uppercase ${carro.disponivel ? "text-green-700" : "text-red-500"}`}>
										{carro.disponivel ? "Disponível" : "Indisponível"}
									</span>
								</div>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
}