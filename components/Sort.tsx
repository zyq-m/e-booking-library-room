import React, { useState } from "react";
import Modal from "react-modal";
import RadioButton from "./RadioButton";

const customStyles: Modal.Styles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    borderRadius: "1rem",
    border: "none",
    paddingInline: "2rem",
    paddingBlock: "1.5rem",
  },
  overlay: {
    backgroundColor: "rgba(36, 36, 36, 0.50)",
  },
};

type TSort = {
  totalRoom: number;
  roomStatus: (status: boolean | string) => void;
  search: string;
};

Modal.setAppElement("#__next");

export default function Sort({ totalRoom, roomStatus, search }: TSort) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isAvailable, setIsAvailable] = useState(search);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

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

  return (
    <div className="flex justify-between items-center mb-6">
      <p>{totalRoom} room are found</p>
      <button
        type="button"
        className="border rounded-full py-1 px-4"
        onClick={openModal}>
        Filter
      </button>
      <Modal
        closeTimeoutMS={200}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal">
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
      </Modal>
    </div>
  );
}
