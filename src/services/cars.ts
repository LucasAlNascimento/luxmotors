import { Car, CarFilters } from "../interfaces/car";
import { PageResponse } from "../interfaces/page-response";
import { api } from "./api";

export const getCars = async (filters?: CarFilters): Promise<PageResponse<Car>> => {
  const params: Record<string, string | number> = {
    page: 0,
    size: 5,
  };

  Object.entries(filters ?? {}).forEach(([key, value]) => {
    if (value) params[key] = value;
  });

  const { data } = await api.get("/cars", { params });

  return data;
};