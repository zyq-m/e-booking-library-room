import { SupabaseClient } from "@supabase/supabase-js";
import { fetchUserId } from "./fetchUserId";

export async function fetchUser(supabase: SupabaseClient) {
  const userId = await fetchUserId(supabase);
  return await supabase.from("user").select("name").eq("userId", userId);
}

export async function fetchUsers(supabase: SupabaseClient) {
  return await supabase.from("user").select("*").eq("role", "user");
}
