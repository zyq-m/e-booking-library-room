import { supabase } from "../lib/supabase";

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
