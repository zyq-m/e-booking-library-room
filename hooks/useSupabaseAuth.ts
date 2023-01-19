import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";

export default function useSupabase() {
  const session = useSession();
  const supabase = useSupabaseClient();

  return { session, supabase };
}
