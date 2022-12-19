import React, { useEffect, useState } from "react";
import RadioButton from "./RadioButton";
import CustomModal from "./Modal";
import useModal from "../hooks/useModal";

type TSort = {
  totalRoom: number;
  roomStatus: (status: boolean | string) => void;
  search?: string;
};

export default function Sort({ totalRoom, roomStatus, search }: TSort) {
  const [isAvailable, setIsAvailable] = useState<string>("");
  const { modalIsOpen, closeModal, openModal } = useModal();

  function handleRadio(e: React.ChangeEvent<HTMLInputElement>): void {
    setIsAvailable(e.target.value);
    closeModal();

    if (e.target.value === "available") {
      roomStatus(true);
      return;
    }

    if (e.target.value === "all") {
      roomStatus(e.target.value);
      return;
    }

    roomStatus(false);
  }

  useEffect(() => {
    if (search === "all") {
      setIsAvailable(search);
    }
  }, [search]);

  return (
    <div className="flex justify-between items-center mb-6">
      <p>{totalRoom} room are found</p>
      <button
        type="button"
        className="border rounded-full py-1 px-4"
        onClick={openModal}>
        Filter
      </button>
      <CustomModal modalIsOpen={modalIsOpen} closeModal={closeModal}>
        <h3 className="mb-4 font-semibold">Filter by room status</h3>
        <div className="grid gap-4">
          <RadioButton
            id="all"
            label="All"
            name="isAvailable"
            value="all"
            onChange={handleRadio}
            checked={isAvailable === "all"}
          />
          <RadioButton
            id="available"
            label="Available"
            name="isAvailable"
            value="available"
            onChange={handleRadio}
            checked={isAvailable === "available"}
          />
          <RadioButton
            id="notAvailable"
            label="Not Available"
            name="isAvailable"
            value="notAvailable"
            onChange={handleRadio}
            checked={isAvailable === "notAvailable"}
          />
        </div>
      </CustomModal>
    </div>
  );
}
