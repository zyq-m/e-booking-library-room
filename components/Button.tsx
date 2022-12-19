import React from "react";

type TButon = {
  styles?: string;
  label: string;
  disable?: boolean;
  onClick?: () => void;
};

export default function Button({ styles, label, disable, onClick }: TButon) {
  return (
    <button
      type="button"
      className={`${styles} p-2 rounded-3xl bg-blue-400 text-white`}
      onClick={onClick}
      disabled={disable}>
      {label}
    </button>
  );
}
