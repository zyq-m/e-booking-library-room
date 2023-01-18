import { supabase } from "../lib/supabase";
import { fetchUserId } from "./fetchUserId";

export async function fetchUser(jwt: string | undefined) {
  const userId = await fetchUserId(jwt);

  const { data, error } = await supabase
    .from("user")
    .select("name")
    .eq("userId", userId);

  return { data, error };
}

export async function fetchUsers() {
  return await supabase.from("user").select();
}
