import { SupabaseClient } from "@supabase/supabase-js";
import { fetchUserId } from "./fetchUserId";

export async function bookRoom(
  supabase: SupabaseClient,
  from: string | undefined,
  to: string | undefined,
  roomId: string
) {
  const id = await fetchUserId(supabase);
  const booking = supabase
    .from("booking")
    .insert({ userId: id, from: from, to: to, roomId: roomId }); // add record to booking table
  const update = supabase
    .from("room")
    .update({ isBooked: true, isAvailable: false })
    .eq("roomId", roomId); // update booked and available status

  return await Promise.all([booking, update]);
}

export async function approveBooking(
  supabase: SupabaseClient,
  bookingId: string[]
) {
  const approvalList = bookingId.map(async id => {
    await supabase
      .from("booking")
      .update({ approved: true })
      .eq("bookingId", id);
  });

  return await Promise.all(approvalList);
}
