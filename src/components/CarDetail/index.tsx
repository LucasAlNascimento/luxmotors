import { useParams, useNavigate } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getCarById } from "../../services/cars";
import { addFavorite, removeFavorite, listFavorites } from "../../services/favorites";
import CarViewer from "../CarViewer";
import ReservationModal from "../ReservationModal";
import { getUsuarioLogado, isAuthenticated } from "../../services/auth";
import { toast } from "sonner";

export default function CarDetail() {
  const { id } = useParams();
  const [view3D, setView3D] = useState(false);
  const [modalAberto, setModalAberto] = useState(false);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const usuario = getUsuarioLogado();
  const logado = isAuthenticated();

  useEffect(() => {
    if (usuario?.id) {
      queryClient.removeQueries({ queryKey: ["favorites", usuario.id] });
    }
  }, [id, usuario?.id, queryClient]);

  const { data: carro, isLoading: isLoadingCarro } = useQuery({
    queryKey: ["car", id],
    queryFn: () => getCarById(id!),
    enabled: !!id,
  });

  const { data: favoritos = [], isLoading: isLoadingFavoritos } = useQuery({
    queryKey: ["favorites", usuario?.id],
    queryFn: () => listFavorites(usuario!.id),
    enabled: !!usuario?.id,
    staleTime: 0,
    refetchOnMount: true,
  });

  const isReady = !isLoadingCarro && (usuario ? !isLoadingFavoritos : true);
  const isFavorito = favoritos.includes(id!);

  const { mutate: toggleFavorito, isPending } = useMutation({
    mutationFn: async () => {
      if (!logado || !usuario) {
        navigate("/login");
        return null;
      }
      if (isFavorito) {
        await removeFavorite(usuario.id, id!);
      } else {
        await addFavorite(usuario.id, id!);
      }
      return true;
    },
    onSuccess: (result) => {
      if (!result) return;
      queryClient.invalidateQueries({ queryKey: ["favorites", usuario?.id] });
      toast.success(isFavorito ? "Removido dos favoritos" : "Adicionado aos favoritos");
    },
    onError: () => {
      toast.error("Erro ao atualizar favoritos");
    },
  });

  function handleReservar() {
    if (!logado || !usuario) {
      navigate("/login");
      return;
    }
    setModalAberto(true);
  }

  const formatPrice = (value: number) =>
    value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  return (
    <div className="w-full max-w-screen-2xl mx-auto py-24 min-h-screen flex px-10">
      {!isReady && (
        <div className="m-auto text-xs tracking-[0.3em] uppercase text-gray-400">
          Carregando...
        </div>
      )}

      {isReady && !carro && (
        <div className="m-auto text-center text-gray-500">
          <p className="text-2xl font-light tracking-widest">Veículo não encontrado</p>
          <p className="text-xs tracking-[0.2em] uppercase text-gray-400 mt-2">Pode ter sido removido</p>
        </div>
      )}

      {isReady && carro && (
        <>
          <div className="grid w-full gap-8 items-center lg:grid-cols-2">

            <div className="w-full h-[440px] rounded-sm overflow-hidden shadow-lg relative">
              {view3D ? (
                <CarViewer modelUrl={carro.model3dUrl} />
              ) : (
                <img
                  src={carro.imgUrl}
                  alt={`${carro.marca} ${carro.modelo}`}
                  className="w-full h-full object-cover hover:scale-105 transition duration-700"
                />
              )}

              {carro.hasModel3d && (
                <button
                  onClick={() => setView3D((v) => !v)}
                  className="absolute bottom-3 right-3 bg-black/70 text-white text-[10px] tracking-[0.2em] uppercase px-3 py-2 hover:bg-black transition-colors"
                >
                  {view3D ? "Ver foto" : "Ver em 3D"}
                </button>
              )}
            </div>

            <div className="flex flex-col gap-8">

              <div className="flex flex-col gap-2 border-b border-gray-300/60 pb-4">
                <div className="flex justify-between items-start">
                  <span className="text-xs tracking-[0.3em] uppercase text-gray-400">
                    {carro.marca}
                  </span>
                  <button
                    onClick={() => toggleFavorito()}
                    disabled={isPending}
                    className="text-gray-400 hover:text-gray-900 transition-colors duration-300 disabled:opacity-50"
                    title={logado ? (isFavorito ? "Remover dos favoritos" : "Adicionar aos favoritos") : "Faça login para favoritar"}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={isFavorito ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5" className={`w-5 h-5 ${isFavorito ? "text-gray-900" : ""}`}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                  </button>
                </div>
                <h1 className="text-4xl font-light tracking-tight text-gray-900">{carro.modelo}</h1>
                <p className="text-xs tracking-[0.2em] uppercase text-gray-500 mt-1">{carro.descricao}</p>
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
                <span className="text-xl font-light text-gray-900">{formatPrice(carro.precoDiaria)} / dia</span>
              </div>

              <button
                onClick={handleReservar}
                disabled={!carro.disponivel}
                className={`h-14 text-xs tracking-[0.3em] uppercase transition-colors duration-300 ${carro.disponivel
                  ? "w-48 bg-black text-white hover:bg-gray-800"
                  : "w-48 bg-gray-400 text-white cursor-not-allowed"
                }`}
              >
                {carro.disponivel ? "Reservar" : "Indisponível"}
              </button>

            </div>
          </div>

          {modalAberto && usuario && (
            <ReservationModal
              carro={carro}
              userId={usuario.id}
              onClose={() => setModalAberto(false)}
            />
          )}
        </>
      )}
    </div>
  );
}