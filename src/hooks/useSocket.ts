import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import socketIOClient, { Socket } from "socket.io-client";
import { socketState } from "~/store/socket";

const baseUrl = process.env.NEXT_PUBLIC_API_BASEURL || "/api";

export type UseSocketReturns = Socket;

export const useSocket = (): UseSocketReturns => {
  const [socket, setSocket] = useState<Socket>(undefined);

  useEffect(() => {
    const socketClient = socketIOClient(baseUrl);
    setSocket(socketClient);
    socketClient.on("connected", () => console.log("connected"));
    return () => {
      socketClient.off();
      socketClient.disconnect();
      console.log("disconnected");
    };
  }, []);

  return socket;
};
