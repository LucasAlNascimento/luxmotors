import { CreateUser } from "../interfaces/create-user";
import { api } from "./api";

export const createUser = async (user: CreateUser): Promise<CreateUser> => {
	const { data } = await api.post(`/users`, user);

	return data;
};