import React, { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  className?: string;
}>;

const QuestionCard: React.FC<Props> = ({ children, className }) => {
  return (
    <div
      className={`flex h-[150px] items-center justify-center whitespace-pre-wrap rounded-sm border-2 border-black bg-yellow-300 px-4 py-1.5 text-lg text-black ${className}`}
    >
      {children}
    </div>
  );
};

export default QuestionCard;
