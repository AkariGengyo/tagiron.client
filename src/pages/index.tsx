import Head from "next/head";
import React from "react";
import Button from "~/components/parts/button";
import QuestionCards from "~/components/templates/questionCards";

import { Question } from "~/types/question";

const questions: Question[] = [
  { id: "1", text: "青の数字タイルは何前ある？" },
  { id: "2", text: "赤の数の合計数は？" },
  { id: "3", text: "大きいほうから3枚の合計数は？" },
  { id: "4", text: "1または2はどこ？（どちらかひとつ選択）" },
  { id: "5", text: "奇数は何枚ある？" },
  {
    id: "6",
    text: "[共有情報カード]\n数字タイルの最大の数から最小の数を引いた数は？",
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
      </main>
    </div>
  );
};

export default Index;
