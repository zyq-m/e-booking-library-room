import { SupabaseClient } from "@supabase/supabase-js";

export async function cancelBooking(
  supabase: SupabaseClient,
  roomId: string | undefined
) {
  return await supabase
    .from("room")
    .update({ isBooked: false, isAvailable: true })
    .eq("roomId", roomId);
}
