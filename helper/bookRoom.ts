import { supabase } from "../lib/supabase";

export async function bookRoom(
  token: string | undefined,
  from: string,
  to: string,
  roomId: string
) {
  const id = (await supabase.auth.getUser(token)).data.user?.id;
  const { data, error } = await supabase
    .from("booking")
    .insert({ id, from, to, roomId });

  return { data, error };
}
