import { useEffect, useState } from "react";
import useSupabase from "./useSupabaseAuth";
import { fetchUser } from "../helper/fetchUser";

export default function useFetchName() {
  const { supabase } = useSupabase();
  const [name, setName] = useState<string>("");

  useEffect(() => {
    fetchUser(supabase)
      .then(res => {
        setName(res.data?.[0].name);
      })
      .catch(err => err);
  }, [supabase]);

  return name;
}
