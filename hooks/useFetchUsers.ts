import { useState, useEffect } from "react";
import useSupabase from "./useSupabaseAuth";
import { User } from "../pages/admin/users";
import { fetchUsers } from "../helper/fetchUser";

export default function useFetchUsers() {
  const { supabase } = useSupabase();
  const [users, setUsers] = useState<User[] | null>([]);

  useEffect(() => {
    fetchUsers(supabase)
      .then(res => setUsers(res.data))
      .catch(err => err);
  }, [supabase]);

  return users;
}
