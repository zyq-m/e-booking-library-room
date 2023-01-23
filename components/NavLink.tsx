import router from "next/router";
import React from "react";
import { supabase } from "../lib/supabase";
import ActiveLink, { Link } from "./ActiveLink";
import CustomModal from "./Modal";
import { TModal } from "./Modal";

interface Nav extends TModal {
  links: Link[];
}

export default function NavLink({ closeModal, modalIsOpen, links }: Nav) {
  return (
    <CustomModal closeModal={closeModal} modalIsOpen={modalIsOpen}>
      <ul className="grid gap-4 text-center w-40 min-w-fit">
        {links.map(link => {
          return (
            <li key={link.id}>
              <ActiveLink id={link.id} link={link.link} name={link.name} />
            </li>
          );
        })}
        <li
          onClick={() => {
            supabase.auth.signOut();
            router.push("/");
          }}>
          Logout
        </li>
      </ul>
    </CustomModal>
  );
}
