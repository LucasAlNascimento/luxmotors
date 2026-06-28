import { api } from "./api";

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