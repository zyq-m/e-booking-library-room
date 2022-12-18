import React from "react";
import { VscBell, VscMenu } from "react-icons/vsc";

export default function NavBar() {
  return (
    <nav>
      <div className="flex justify-between py-3 mb-4">
        <VscMenu size={25} />
        <VscBell size={25} />
      </div>
    </nav>
  );
}
