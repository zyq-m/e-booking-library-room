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
  },
  overlay: {
    backgroundColor: "rgba(36, 36, 36, 0.50)",
  },
};

type TSort = {
  totalRoom: number;
  roomStatus: (status: boolean) => void;
};

Modal.setAppElement("#__next");

export default function Sort({ totalRoom, roomStatus }: TSort) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isAvailable, setIsAvailable] = useState("");

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleRadio(e: React.ChangeEvent<HTMLInputElement>): void {
    setIsAvailable(e.target.value);

    if (e.target.value === "available") {
      roomStatus(true);
      return;
    }
    roomStatus(false);
  }

  return (
    <div className="flex justify-between items-center mb-6">
      <p>{totalRoom} room are found</p>
      <button className="border rounded-2xl py-1 px-3" onClick={openModal}>
        Filter
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal">
        <h3 className="mb-4 font-semibold">Filter by room status</h3>
        <div className="grid gap-4">
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
