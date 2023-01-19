import { SupabaseClient } from "@supabase/supabase-js";

interface Options {
  admin?: boolean;
  user?: boolean;
}

export async function addUser(
  supabase: SupabaseClient,
  email: string,
  password: string,
  name?: string,
  options?: Options
) {
  const signUp = await supabase.auth.signUp({
    email: email,
    password: password,
  });

  if (options?.admin) {
    await supabase
      .from("user")
      .insert({ userId: signUp.data.user?.id, name: name, role: "admin" });
  } else {
    await supabase
      .from("user")
      .insert({ userId: signUp.data.user?.id, name: name });
  }

  return signUp;
}
