import React from "react";

export type TBreadcrumb = {
  label: string;
  selected: boolean;
  onBread?: () => void;
};

export default function Breadcrumb({ label, selected, onBread }: TBreadcrumb) {
  return (
    <button
      type="button"
      className={`${
        selected ? "bg-blue-400 text-white" : "border"
      } rounded-full px-6 py-2 text-sm flex-shrink-0`}
      onClick={onBread}>
      {label}
    </button>
  );
}
