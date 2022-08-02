import React, { PropsWithChildren } from "react";
import { Question } from "~/types/question";

type Props = PropsWithChildren<{
  question: Question;
  className?: string;
}>;

const QuestionCard: React.FC<Props> = ({ question, className }) => {
  return (
    <div
      className={`flex h-[150px] w-full items-center justify-center whitespace-pre-wrap rounded-sm border-2 border-black bg-yellow-300 px-4 py-1.5 text-lg text-black ${className}`}
    >
      {question.isShare && "[共有情報カード]\n"}
      {question.text}
    </div>
  );
};

export default QuestionCard;
