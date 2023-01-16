import React from "react";

type TButon = {
  styles?: string;
  label: string;
  disable?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
  id?: string;
};

export default function Button({
  styles,
  label,
  disable,
  onClick,
  type,
  id,
}: TButon) {
  return (
    <button
      type={type || "button"}
      className={`${styles} p-2 rounded-3xl bg-blue-400 text-white disabled:opacity-70`}
      onClick={onClick}
      disabled={disable}
      id={id}>
      {label}
    </button>
  );
}
