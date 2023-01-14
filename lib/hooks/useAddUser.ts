import useSupabase from "./useSupabaseAuth";

export default async function useAddUser() {
  const { supabase } = useSupabase();

  async function addUser(userId: string | undefined, name: string | undefined) {
    const { data, error } = await supabase
      .from("user")
      .insert({ userId: userId, name: name });

    return { data, error };
  }

  return addUser;
}
