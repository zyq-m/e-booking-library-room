import { supabase } from "../lib/supabase";

export async function cancelBooking(roomId: string | undefined) {
  return await supabase
    .from("room")
    .update({ isBooked: false, isAvailable: true })
    .eq("roomId", roomId);
}
