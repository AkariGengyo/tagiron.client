import { axios } from "./config";

export const createUser = async () => {
  const res = await axios.post("/users");
  return res.data;
};
