import { atom } from "recoil";
import { recoilPersist } from "recoil-persist"; //追加
import { Socket } from "socket.io-client";

const { persistAtom } = recoilPersist({
  key: "SocketStatePersist",
  storage: typeof window === "undefined" ? undefined : sessionStorage,
});

export const socketState = atom<Socket>({
  key: "socketState",
  default: undefined,
  effects_UNSTABLE: [persistAtom],
});
