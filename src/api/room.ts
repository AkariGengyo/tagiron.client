import { axios } from "./config";

export const createRoom = async () => {
  const res = await axios.get("/room");
  return res.data;
};
