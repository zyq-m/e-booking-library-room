import React from "react";

type TButon = {
  styles?: string;
  label: string;
  disable?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
};

export default function Button({
  styles,
  label,
  disable,
  onClick,
  type,
}: TButon) {
  return (
    <button
      type={type || "button"}
      className={`${styles} p-2 rounded-3xl bg-blue-400 text-white`}
      onClick={onClick}
      disabled={disable}>
      {label}
    </button>
  );
}
