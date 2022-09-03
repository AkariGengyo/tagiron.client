import { axios } from "./config";

export const createRoom = async () => {
  const res = await axios.post("/rooms");
  return res.data;
};

export const createPlayer = async (roomId: string) => {
  const res = await axios.post(`/rooms/${roomId}/players`);
  return res.data;
};

export const fetchRoom = async (roomId: string) => {
  const res = await axios.get(`/rooms/${roomId}`);
  return res.data;
};

export const fetchPlayers = async (roomId: string) => {
  const res = await axios.get(`/rooms/${roomId}/players`);
  return res.data;
};
