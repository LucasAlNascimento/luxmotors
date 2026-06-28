import { CreateUser } from "../interfaces/create-user";
import { api } from "./api";

export const createUser = async (user: CreateUser): Promise<CreateUser> => {
  const { data } = await api.post(`/users`, user);
  return data;
};

export const login = async (email: string, senha: string): Promise<string> => {
  const { data } = await api.post("/auth/login", { email, senha });
  localStorage.setItem("token", data.token);
  return data.token;
};

export const logout = () => {
  localStorage.removeItem("token");
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const isAuthenticated = () => {
  return !!getToken();
};