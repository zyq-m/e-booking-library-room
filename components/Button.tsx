import React from "react";

type TButon = {
  styles?: string;
  label: string;
  disable?: boolean;
};

export default function Button({ styles, label, disable }: TButon) {
  return (
    <button
      type="button"
      className={`${styles} p-2 rounded-3xl bg-blue-400 text-white`}
      disabled={disable}>
      {label}
    </button>
  );
}
