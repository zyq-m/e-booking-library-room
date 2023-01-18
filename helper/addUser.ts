import { supabase } from "../lib/supabase";

export async function addUser(email: string, password: string) {
  return await supabase.auth.signUp({ email: email, password: password });
}

export async function addAdmin(userId: string | undefined) {
  return await supabase
    .from("user")
    .update({ role: "admin" })
    .eq("userId", userId);
}
