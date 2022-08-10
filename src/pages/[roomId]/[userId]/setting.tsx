import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import React from "react";
import Button from "~/components/parts/button";
import { User } from "~/types/user";

const players: User[] = [
  { id: "1", name: "player1" },
  { id: "2", name: "player2" },
];

const Index: React.VFC = () => {
  const router = useRouter();
  const { roomId, userId } = router.query;
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
            {players.map((player) => (
              <span key={player.id}>{player.name}</span>
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
