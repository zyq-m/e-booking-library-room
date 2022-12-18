import React, { useState, useRef } from "react";
import { BiSearch } from "react-icons/bi";
import Breadcrumb, { TBreadcrumb } from "./Breadcrumb";

const data: TBreadcrumb[] = [
  { label: "All", selected: true },
  { label: "Available", selected: false },
  { label: "Not available", selected: false },
];

export default function Search() {
  const [bread, setBread] = useState(data);
  const searchRef = useRef<HTMLInputElement>(null);

  function onBread(label: string) {
    setBread(prev =>
      prev.map(d => {
        if (d.label === label) {
          return { ...d, selected: true };
        }
        return { ...d, selected: false };
      })
    );
  }

  function onSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(searchRef.current?.value);
  }

  return (
    <>
      <label htmlFor="search" className="mb-6">
        Find your favorite Room
      </label>
      <form
        className="flex items-center my-6 px-3 py-2 gap-3 rounded-lg bg-white"
        onSubmit={onSearch}>
        <BiSearch size={20} />
        <input
          ref={searchRef}
          className="flex-1 focus:outline-none"
          id="search"
          placeholder="Search here..."
        />
      </form>
      <div className="pb-2 mb-3 flex gap-3 w-full flex-nowrap overflow-auto">
        {bread.map((d, i) => {
          return (
            <Breadcrumb
              key={i}
              label={d.label}
              selected={d.selected}
              onBread={() => onBread(d.label)}
            />
          );
        })}
      </div>
    </>
  );
}
