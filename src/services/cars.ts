import { Car } from "../interfaces/car";
import { PageResponse } from "../interfaces/page-response";
import { api } from "./api";

export const getCars = async (marca?: string): Promise<PageResponse<Car>> => {
  const params: { page: number; size: number; marca?: string } = {
    page: 0,
    size: 5,
  };

  if (marca) {
    params.marca = marca;
  }

  const { data } = await api.get("/cars", { params });

  return data;
};
