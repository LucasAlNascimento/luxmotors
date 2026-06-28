import { api } from "./api";
import { Car } from "../interfaces/car";

export const addFavorite = async (userId: string, carId: string): Promise<void> => {
  await api.post("/favorites", { userId, carId });
};

export const removeFavorite = async (userId: string, carId: string): Promise<void> => {
  await api.delete(`/favorites/${userId}/${carId}`);
};

export const listFavorites = async (userId: string): Promise<string[]> => {
  const { data } = await api.get(`/favorites/${userId}`);
  return data.map((f: { car: { id: string } }) => f.car.id);
};

export const listFavoritesDetailed = async (userId: string): Promise<Car[]> => {
  const { data } = await api.get(`/favorites/${userId}`);
  return data.map((f: { car: Car }) => f.car);
};