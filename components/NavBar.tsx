import { useRouter } from "next/router";
import React from "react";
import { VscBell, VscMenu } from "react-icons/vsc";
import useSupabase from "../hooks/useSupabaseAuth";

export default function NavBar() {
  const { supabase } = useSupabase();
  const router = useRouter();

  return (
    <nav>
      <div className="flex justify-between py-3 mb-4">
        <VscMenu size={25} />
        <button
          type="button"
          onClick={() => {
            supabase.auth.signOut();
            router.push("/");
          }}>
          Logout
        </button>
        <VscBell size={25} />
      </div>
    </nav>
  );
}
