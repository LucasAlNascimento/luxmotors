import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8080/api", //TODO: INSERIR URL OFICIAL QUANDO FOR PARA PRODUÇÃO
  timeout: 10000,
});
