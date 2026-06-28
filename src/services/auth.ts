import { CreateUser } from "../interfaces/create-user";
import { api } from "./api";
import { jwtDecode } from "jwt-decode";

interface TokenPayload {
  sub: string;
  nome: string;
	id: string;
  exp: number;
}

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

export const getUsuarioLogado = (): TokenPayload | null => {
  const token = getToken();
  if (!token) return null;
  return jwtDecode<TokenPayload>(token);
};