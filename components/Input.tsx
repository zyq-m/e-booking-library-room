import React from "react";

interface TInput {
  label: string;
  id: string;
  placeholder?: string;
  type: React.HTMLInputTypeAttribute;
  styles?: string;
  labelStyle?: string;
}

const Input = React.forwardRef<HTMLInputElement, TInput>(
  ({ id, label, type, placeholder, styles, labelStyle }, ref) => {
    return (
      <div>
        <label
          htmlFor={id}
          className={`block text-sm text-gray-500 ml-1 ${labelStyle}`}>
          {label}
        </label>
        <input
          ref={ref}
          type={type}
          id={id}
          className={`border px-3 py-2 rounded-lg w-full ${styles}`}
          placeholder={placeholder}
        />
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
