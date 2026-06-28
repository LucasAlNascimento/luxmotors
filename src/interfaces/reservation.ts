export interface Reservation {
  id: string;
  carId: string;
  marca: string;
  modelo: string;
  imgUrl: string;
  dataInicio: string;
  dataFim: string;
  valorTotal: number;
  ativa: boolean;
  dataCriacao: string;
}

export interface ReservationRequest {
  userId: string;
  carId: string;
  dataInicio: string;
  dataFim: string;
}