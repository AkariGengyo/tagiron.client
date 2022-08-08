import { axios } from "./config";

type CreateUserParams = {
  roomId: string;
};
export const createUser = async (params: CreateUserParams) => {
  const res = await axios.post("/user", params);
  return res.data;
};
