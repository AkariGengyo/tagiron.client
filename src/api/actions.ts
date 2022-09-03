import { axios } from "./config";

type SendQuestionParams = {
  senderId: string;
  questionId: string;
};

export const sendQuestion = async (
  roomId: string,
  params: SendQuestionParams
) => {
  const res = await axios.post(`/${roomId}/actions/question`, params);
  return res.data;
};

type SendChallengeParams = {
  senderId: string;
  tiles: string;
};

export const sendChallenge = async (
  roomId: string,
  params: SendChallengeParams
) => {
  const res = await axios.post(`/${roomId}/actions/challenge`, params);
  return res.data;
};
