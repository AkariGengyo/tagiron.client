import { useRouter } from "next/dist/client/router";
import React from "react";
import { Socket } from "socket.io-client";
import { sendChallenge, sendQuestion } from "~/api/actions";
import { Message } from "~/types/chat";
import Button from "../parts/button";
import ChatMessage from "../parts/chatMessage";

type Props = {
  messages: Message[];
  socket: Socket;
  className?: string;
};

const Chat: React.FC<Props> = ({ messages, socket, className }) => {
  const router = useRouter();
  const senderId = router.query.userId as string;
  const roomId = router.query.roomId as string;
  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <div className={`flex flex-col gap-y-2 ${className}`}>
        {messages.map((message, i) => (
          <ChatMessage
            key={`message-${i}`}
            className={`max-w-[90%] ${
              message.senderId == senderId
                ? "place-self-end bg-yellow-200"
                : "place-self-start"
            }`}
          >
            {message.content}
          </ChatMessage>
        ))}
      </div>
      <div className="flex justify-center gap-x-2">
        <Button
          onClick={() =>
            sendChallenge(roomId, {
              senderId: senderId,
              tiles: "青1 青2 赤3 青4 5",
            })
          }
        >
          宣言する
        </Button>
        <Button
          onClick={() =>
            sendQuestion(roomId, {
              senderId: senderId,
              questionId: "questionId", // todo: 質問カードのidに置換
            })
          }
        >
          質問する
        </Button>
      </div>
    </div>
  );
};

export default Chat;
