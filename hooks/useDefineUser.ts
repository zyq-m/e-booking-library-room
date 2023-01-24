import { useState, useEffect } from "react";
import useSupabase from "./useSupabaseAuth";

export default function useDefineUser() {
  const { supabase } = useSupabase();
  const [user, setUser] = useState<string>("");

  async function fetchUser() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { data } = await supabase
      .from("user")
      .select("role")
      .eq("userId", user?.id);
    setUser(data?.[0].role);
  }

  useEffect(() => {
    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [supabase]);

  return user;
}
