import { supabase } from "../lib/supabase";

export async function fetchUser(userId: string | undefined) {
  const { data, error } = await supabase
    .from("user")
    .select("name")
    .eq("userId", userId);

  return { data, error };
}
