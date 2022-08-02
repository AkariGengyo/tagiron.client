import React from "react";
import { Question } from "~/types/question";
import QuestionCard from "../parts/QuestionCard";

type Props = {
  questions: Question[];
  className?: string;
};

const QuestionCards: React.FC<Props> = ({ questions, className }) => {
  return (
    <div className={`grid grid-cols-3 gap-2 ${className}`}>
      {questions.map((question) => (
        <QuestionCard key={question.id} className="max-w-[400px]">
          {question.text}
        </QuestionCard>
      ))}
    </div>
  );
};

export default QuestionCards;
