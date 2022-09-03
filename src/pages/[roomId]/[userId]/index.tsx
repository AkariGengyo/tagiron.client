import Head from "next/head";
import React, { useEffect, useState } from "react";
import socketIOClient, { Socket } from "socket.io-client";
import Chat from "~/components/templates/chat";
import QuestionCards from "~/components/templates/questionCards";
import { useSocket } from "~/hooks/useSocket";
import { Message } from "~/types/chat";
import { Question } from "~/types/question";

const baseUrl = process.env.NEXT_PUBLIC_API_BASEURL || "/api";

const questions: Question[] = [
  { id: "1", text: "青の数字タイルは何枚ある？", isShare: false },
  { id: "2", text: "赤の数の合計数は？", isShare: false },
  { id: "3", text: "大きいほうから3枚の合計数は？", isShare: false },
  { id: "4", text: "1または2はどこ？（どちらかひとつ選択）", isShare: false },
  { id: "5", text: "奇数は何枚ある？", isShare: false },
  {
    id: "6",
    text: "数字タイルの最大の数から最小の数を引いた数は？",
    isShare: true,
  },
];

const initMessages: Message[] = [
  { content: "青の数字タイルは何枚ある？", senderId: "1" },
  { content: "赤の数の合計数は？", senderId: "2" },
  { content: "大きいほうから3枚の合計数は？", senderId: "1" },
  { content: "1または2はどこ？（どちらかひとつ選択）", senderId: "1" },
  { content: "奇数は何枚ある？", senderId: "2" },
  {
    content: "数字タイルの最大の数から最小の数を引いた数は？",
    senderId: "2",
  },
];

const Index: React.VFC = () => {
  const [messages, setMessages] = useState<Message[]>(initMessages);
  const socket = useSocket();

  useEffect(() => {
    socket?.on("action", (data) => {
      setMessages((prev) => [...prev, data]);
      console.log([...messages, data]);
    });
  }, [socket]);

  return (
    <div>
      <Head>
        <title>Tagiron</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="grid grid-cols-3 divide-x-2">
          <div className="col-span-1 px-2">
            <Chat messages={messages} socket={socket} />
          </div>
          <div className="col-span-2 px-2">
            <QuestionCards questions={questions} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
