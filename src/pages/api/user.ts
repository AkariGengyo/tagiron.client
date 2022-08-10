import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req.body); // roomIdを表示
  res.status(200).json({ id: "testUserId", name: "Player1" });
};
