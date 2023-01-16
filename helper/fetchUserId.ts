import { supabase } from "../lib/supabase";

export async function fetchUserId(token: string | undefined) {
  return (await supabase.auth.getUser(token)).data.user?.id;
}
