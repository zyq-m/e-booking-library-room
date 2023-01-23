import { useRouter } from "next/router";
import React from "react";
import { VscBell, VscMenu } from "react-icons/vsc";
import useSupabase from "../hooks/useSupabaseAuth";
import useModal from "../hooks/useModal";
import NavLink from "./NavLink";
import { ADMIN_ROUTE } from "../public/constant";

export default function NavBar() {
  const { supabase } = useSupabase();
  const router = useRouter();
  const { closeModal, modalIsOpen, openModal } = useModal();

  return (
    <nav>
      <div className="flex justify-between py-3 mb-4 relative">
        <VscMenu size={25} onClick={openModal} />
        <VscBell size={25} />
      </div>
      {/* admin */}
      <NavLink
        links={ADMIN_ROUTE}
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
      />
    </nav>
  );
}
