import type { NextApiRequest, NextApiResponse } from "next";
import { history } from "../../../public/data";

export async function getBooking() {
  return history;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method == "GET") {
    const data = getBooking(); // put await
    return res.status(200).json({ data: history });
  }
}
