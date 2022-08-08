import Head from "next/head";
import React from "react";
import Button from "~/components/parts/button";
import QuestionCards from "~/components/templates/questionCards";
import SelectNumbers from "~/components/templates/selectNumbers";

import { Question } from "~/types/question";

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

const Index: React.VFC = () => {
  return (
    <div>
      <Head>
        <title>Tagiron</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Button>ボタン</Button>
        <QuestionCards questions={questions} />
        <SelectNumbers isOpen={true}></SelectNumbers>
      </main>
    </div>
  );
};

export default Index;
