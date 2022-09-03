import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { fetchPlayers } from "~/api/rooms";
import Button from "~/components/parts/button";
import { useSocket } from "~/hooks/useSocket";

const Index: React.VFC = () => {
  const router = useRouter();
  const { roomId, userId } = router.query;
  const [players, setPlayers] = useState<string[]>([]);
  const socket = useSocket();

  useEffect(() => {
    (async () => {
      const playerIds = await fetchPlayers(roomId as string);
      setPlayers(playerIds);
    })();
  }, []);

  useEffect(() => {
    socket?.on("players", (data) => {
      console.log(data);
      setPlayers(data);
    });
  }, [socket]);

  return (
    <div>
      <Head>
        <title>Tagiron</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="mx-auto max-w-3xl px-3">
          <h2 className="text-2xl font-bold">プレイヤー</h2>
          <div className="my-10 flex flex-col gap-y-3">
            {players.map((playerId) => (
              <span key={playerId}>{playerId}</span>
            ))}
          </div>
          <Button onClick={() => router.push(`/${roomId}/${userId}`)}>
            スタート
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Index;
