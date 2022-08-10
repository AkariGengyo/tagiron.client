import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import React, { useState } from "react";
import { createRoom } from "~/api/room";
import { createUser } from "~/api/user";
import Button from "~/components/parts/button";
import Textbox from "~/components/parts/textbox";

const Index: React.VFC = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const createNewRoom = async () => {
    const { id } = await createRoom();
    const userId = await registerUserId(id);
    router.push(`/${id}/${userId}/setting`);
  };

  const registerUserId = async (roomId: string) => {
    const { id } = await createUser({ roomId });
    return id;
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
              <form className="flex gap-x-1">
                <Textbox placeholder="ルームIDで検索" />
                <Button className="max-w-[80px]">検索</Button>
              </form>
              <Button>入室</Button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Index;
