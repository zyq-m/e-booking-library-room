import React from "react";
import { VscBell, VscMenu } from "react-icons/vsc";
import useModal from "../hooks/useModal";
import NavLink from "./NavLink";
import { ADMIN_ROUTE, USER_ROUTE } from "../public/constant";
import useDefineUser from "../hooks/useDefineUser";

export default function NavBar() {
  const user = useDefineUser();
  const { closeModal, modalIsOpen, openModal } = useModal();

  return (
    <nav>
      <div className="flex justify-between py-3 mb-4 relative">
        <VscMenu size={25} onClick={openModal} />
        <VscBell size={25} />
      </div>
      {/* admin */}
      {user == "user" ? (
        <NavLink
          links={USER_ROUTE}
          closeModal={closeModal}
          modalIsOpen={modalIsOpen}
        />
      ) : (
        <NavLink
          links={ADMIN_ROUTE}
          closeModal={closeModal}
          modalIsOpen={modalIsOpen}
        />
      )}
    </nav>
  );
}
