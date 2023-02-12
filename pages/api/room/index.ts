import type { NextApiRequest, NextApiResponse } from "next";
import { roomData } from "../../../public/data";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method == "GET") {
    return res.status(200).json({ data: roomData });
  }
}
