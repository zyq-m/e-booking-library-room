import { SupabaseClient } from "@supabase/supabase-js";

export async function login(
  supabase: SupabaseClient,
  email: string,
  password: string
) {
  const login = await supabase.auth.signInWithPassword({ email, password });
  // define as user or admin

  const role = await supabase
    .from("user")
    .select("role")
    .eq("userId", login.data.user?.id);

  return { error: login.error, role: role.data?.[0].role };
}
