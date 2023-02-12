import { SupabaseClient } from "@supabase/supabase-js";
import moment from "moment";
import { fetchUserId } from "./fetchUserId";

async function checkTodayBooking(supabase: SupabaseClient, id?: string) {
  const { data } = await supabase
    .from("booking")
    .select("bookingId")
    .eq("userId", id)
    .eq("date", moment().format("YYYY-MM-DD"));

  if (data?.some(id => data?.[0].bookingId == id.bookingId)) {
    return Promise.reject("You only can book once a day");
  }
}

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

  await checkTodayBooking(supabase, id);
  return await Promise.all([booking, update]);
}

export async function bookRoomPermission(
  supabase: SupabaseClient,
  from: string | undefined,
  to: string | undefined,
  roomId: string
) {
  const id = await fetchUserId(supabase);
  const booking = supabase.from("booking").insert({
    userId: id,
    from: from,
    to: to,
    roomId: roomId,
    approved: false,
  }); // add record to booking table
  const update = supabase
    .from("room")
    .update({ isBooked: true, isAvailable: false })
    .eq("roomId", roomId); // update booked and available status

  await checkTodayBooking(supabase, id);
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
