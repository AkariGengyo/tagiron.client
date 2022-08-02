import React from "react";
import { Question } from "~/types/question";
import QuestionCard from "~/components/parts/questionCard";

type Props = {
  questions: Question[];
  className?: string;
};

const QuestionCards: React.FC<Props> = ({ questions, className }) => {
  return (
    <div className={`grid grid-cols-3 justify-items-center gap-2 ${className}`}>
      {questions.map((question) => (
        <QuestionCard
          key={question.id}
          question={question}
          className="max-w-[400px]"
        />
      ))}
    </div>
  );
};

export default QuestionCards;
