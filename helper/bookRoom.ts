import { supabase } from "../lib/supabase";
import { fetchUserId } from "./fetchUserId";

export async function bookRoom(
  token: string | undefined,
  from: string | undefined,
  to: string | undefined,
  roomId: string
) {
  const id = await fetchUserId(token);
  const booking = supabase
    .from("booking")
    .insert({ userId: id, from: from, to: to, roomId: roomId }); // add record to booking table
  const update = supabase
    .from("room")
    .update({ isBooked: true, isAvailable: false })
    .eq("roomId", roomId); // update booked and available status

  return await Promise.all([booking, update]);
}
