import React from "react";
import { Message } from "~/types/chat";
import Button from "../parts/button";
import ChatMessage from "../parts/chatMessage";

type Props = {
  messages: Message[];
  className?: string;
};

const Chat: React.FC<Props> = ({ messages, className }) => {
  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <div className={`flex flex-col gap-y-2 ${className}`}>
        {messages.map((message, i) => (
          <ChatMessage
            key={`message-${i}`}
            className={`max-w-[90%] ${
              message.senderId == "1"
                ? "place-self-end bg-yellow-200"
                : "place-self-start" // todo: 自分のidに置換
            }`}
          >
            {message.content}
          </ChatMessage>
        ))}
      </div>
      <div className="flex justify-center gap-x-2">
        <Button>宣言する</Button>
        <Button>質問する</Button>
      </div>
    </div>
  );
};

export default Chat;
