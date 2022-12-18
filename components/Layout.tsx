import React from "react";
import NavBar from "./NavBar";

export default function Layout({ children }: { children: React.ReactElement }) {
  return (
    <div className="px-4">
      <NavBar />
      {children}
      <footer></footer>
    </div>
  );
}
