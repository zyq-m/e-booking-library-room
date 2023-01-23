import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export interface Link {
  link: string;
  id: string;
  name: string;
}

export default function ActiveLink({ link, id, name }: Link) {
  const router = useRouter();

  return (
    <Link
      href={link}
      id={id}
      className={`${router.pathname == link && "border-b-blue-400 border-b"}`}>
      {name}
    </Link>
  );
}
