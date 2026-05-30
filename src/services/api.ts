import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "https://luxmotors-api.onrender.com/api",
  timeout: 10000,
});