import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import React, { FormEvent, useState } from "react";
import { createPlayer, createRoom, fetchRoom } from "~/api/rooms";
import Button from "~/components/parts/button";
import Textbox from "~/components/parts/textbox";

const Index: React.VFC = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [roomId, setRoomId] = useState<string>(undefined);
  const [roomIdField, setRoomIdField] = useState<string>(undefined);

  const createNewRoom = async () => {
    const newRoomId = await createRoom();
    enterRoom(newRoomId);
  };

  const findRoom = async (e: FormEvent) => {
    e.preventDefault();
    const result = await fetchRoom(roomIdField);
    setRoomId(result);
  };

  const enterRoom = async (roomId: string) => {
    const playerId = await createPlayer(roomId);
    router.push(`/${roomId}/${playerId}/setting`);
  };

  return (
    <div>
      <Head>
        <title>Tagiron</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="mx-auto max-w-3xl px-3">
          <div className="mx-auto my-10 flex max-w-xl flex-col gap-y-3">
            <h1 className="my-5 text-center text-3xl font-bold">Tagiron</h1>
            <Button onClick={createNewRoom}>ルームを作成する</Button>
            <Button onClick={() => setIsOpen((prev) => !prev)}>
              ルームを探す
            </Button>
          </div>
          {isOpen && (
            <div className="mx-auto my-10 flex max-w-xl flex-col gap-y-3">
              <form onSubmit={findRoom} className="flex gap-x-1">
                <Textbox
                  onChange={(e) => setRoomIdField(e.target.value)}
                  placeholder="ルームIDで検索"
                />
                <Button className="max-w-[80px]">検索</Button>
              </form>
              {roomId && <div className="w-full p-5">RoomID: {roomId}</div>}
              <Button onClick={() => enterRoom(roomId)}>入室</Button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Index;
