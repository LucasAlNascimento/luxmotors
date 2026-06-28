import { api } from "./api";
import { Reservation, ReservationRequest } from "../interfaces/reservation";

export const createReservation = async (data: ReservationRequest): Promise<Reservation> => {
  const { data: response } = await api.post("/reservations", data);
  return response;
};

export const listReservations = async (userId: string): Promise<Reservation[]> => {
  const { data } = await api.get(`/reservations/${userId}`);
  return data;
};