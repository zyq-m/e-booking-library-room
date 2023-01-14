import React from "react";

type TRadio = {
  name: string;
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
};

export default function RadioButton({
  name,
  label,
  value,
  id,
  onChange,
  checked,
}: TRadio) {
  return (
    <div className="flex items-center">
      <input
        type="radio"
        id={id}
        value={value}
        name={name}
        className=""
        onChange={onChange}
        checked={checked}
      />
      <label htmlFor={id} className="ml-2 text-sm">
        {label}
      </label>
    </div>
  );
}
