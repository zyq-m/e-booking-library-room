import { fetchUserId } from "./fetchUserId";
import moment from "moment";
import { SupabaseClient } from "@supabase/supabase-js";

export async function fetchRooms(supabase: SupabaseClient) {
  return await supabase.from("room").select("*");
}

export async function fetchRoomByName(
  supabase: SupabaseClient,
  name: string | string[] | undefined
) {
  return await supabase.from("room").select().like("name", `%${name}%`);
}

export async function fetchCurrentBookedRoom(supabase: SupabaseClient) {
  const date = moment().format("YYYY-MM-DD");
  const userId = await fetchUserId(supabase);
  const booking = await supabase
    .from("booking")
    .select(
      `room(
        name,capacity,isBooked,image,isAvailable,roomId
      )`
    )
    .eq("userId", userId)
    .eq("date", date)
    .eq("room.isBooked", true)
    .order("from", { ascending: false });

  return booking;
}

export async function fetchHistoryBooked(supabase: SupabaseClient) {
  const userId = await fetchUserId(supabase);
  return await supabase
    .from("booking")
    .select(
      `
      date,
      from,
      to,
      room (
        name
      )`
    )
    .eq("userId", userId);
}
