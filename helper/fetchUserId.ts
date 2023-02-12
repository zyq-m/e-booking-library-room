import { SupabaseClient } from "@supabase/supabase-js";
import { supabase } from "../lib/supabase";

export async function fetchUserId(supabase: SupabaseClient) {
  return (await supabase.auth.getUser()).data.user?.id;
}
