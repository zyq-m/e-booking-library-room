import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export interface Link {
  link: string;
  id: string;
  name: string;
  otherLink?: string;
}

export default function ActiveLink({ link, id, name, otherLink }: Link) {
  const router = useRouter();

  return (
    <Link
      href={otherLink || link}
      id={id}
      className={`${router.pathname == link && "border-b-blue-400 border-b"}`}>
      {name}
    </Link>
  );
}
