import { supabase } from "../lib/supabase";
import { fetchUserId } from "./fetchUserId";
import moment from "moment";

export async function fetchRooms() {
  const { data, error } = await supabase.from("room").select("*");

  return { data, error };
}

export async function fetchRoomByName(name: string | string[] | undefined) {
  const { data, error } = await supabase
    .from("room")
    .select()
    .like("name", `%${name}%`);

  return { data, error };
}

export async function fetchCurrentBookedRoom(token: string | undefined) {
  const date = moment().format("YYYY-MM-DD");
  const userId = await fetchUserId(token);
  const { data, error } = await supabase
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

  return { data, error };
}

export async function fetchHistoryBooked(token: string | undefined) {
  const userId = await fetchUserId(token);
  const { data, error } = await supabase
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

  return { data, error };
}
