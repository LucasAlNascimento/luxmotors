import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Car } from "../../interfaces/car";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";
import { createReservation } from "../../services/reservations";

interface ReservationModalProps {
  carro: Car;
  userId: string;
  onClose: () => void;
}

export default function ReservationModal({ carro, userId, onClose }: ReservationModalProps) {
  const [dataInicio, setDataInicio] = useState("");
  const [dataFim, setDataFim] = useState("");
  const queryClient = useQueryClient();

  const hoje = new Date().toISOString().split("T")[0];

  const dias = dataInicio && dataFim
    ? Math.ceil((new Date(dataFim).getTime() - new Date(dataInicio).getTime()) / (1000 * 60 * 60 * 24))
    : 0;

  const valorTotal = dias > 0 ? dias * carro.precoDiaria : 0;

  const formatPrice = (value: number) =>
    value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  const { mutate: handleReservar, isPending } = useMutation({
    mutationFn: () => createReservation({
      userId,
      carId: carro.id,
      dataInicio,
      dataFim,
    }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["car", carro.id] });
      toast.success("Reserva realizada com sucesso!");
      onClose();
    },
    onError: () => {
      toast.error("Erro ao realizar reserva");
    },
  });

  function handleSubmit() {
    if (!dataInicio || !dataFim) {
      toast.error("Selecione as datas de início e fim");
      return;
    }
    if (dias <= 0) {
      toast.error("Data fim deve ser posterior à data início");
      return;
    }
    handleReservar();
  }

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center">

        <motion.div
          className="absolute inset-0 bg-black/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        />

        <motion.div
          className="relative z-10 w-full max-w-md bg-gray-200 border border-gray-300/60 shadow-xl p-10 flex flex-col gap-8 mx-4"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >

          <div className="flex justify-between items-start border-b border-gray-300/60 pb-6">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] tracking-[0.3em] uppercase text-gray-400">{carro.marca}</span>
              <h2 className="text-2xl font-light tracking-tight text-gray-900">{carro.modelo}</h2>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-900 transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-[10px] tracking-[0.25em] uppercase text-gray-400">Data de início</label>
              <input
                type="date"
                min={hoje}
                value={dataInicio}
                onChange={(e) => {
                  setDataInicio(e.target.value);
                  if (dataFim && e.target.value >= dataFim) setDataFim("");
                }}
                className="bg-transparent border-b border-gray-400/50 py-2 text-sm text-gray-800 focus:outline-none focus:border-gray-900 transition-colors duration-300"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] tracking-[0.25em] uppercase text-gray-400">Data de fim</label>
              <input
                type="date"
                min={dataInicio || hoje}
                value={dataFim}
                onChange={(e) => setDataFim(e.target.value)}
                disabled={!dataInicio}
                className="bg-transparent border-b border-gray-400/50 py-2 text-sm text-gray-800 focus:outline-none focus:border-gray-900 transition-colors duration-300 disabled:opacity-40"
              />
            </div>
          </div>

          <AnimatePresence>
            {dias > 0 && (
              <motion.div
                className="grid grid-cols-2 gap-px bg-gray-300/60"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex flex-col gap-1 bg-gray-200 px-4 py-4">
                  <span className="text-[10px] tracking-[0.25em] uppercase text-gray-400">Dias</span>
                  <span className="text-sm font-medium text-gray-800">{dias}</span>
                </div>
                <div className="flex flex-col gap-1 bg-gray-200 px-4 py-4">
                  <span className="text-[10px] tracking-[0.25em] uppercase text-gray-400">Total</span>
                  <span className="text-sm font-medium text-gray-800">{formatPrice(valorTotal)}</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <button
            onClick={handleSubmit}
            disabled={isPending || dias <= 0}
            className="h-12 w-full bg-black text-white text-[10px] tracking-[0.3em] uppercase hover:bg-gray-800 transition-colors duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {isPending ? "Aguarde..." : "Confirmar reserva"}
          </button>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}