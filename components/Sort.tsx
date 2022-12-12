import React, { useState } from "react";
import Modal from "react-modal";

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

Modal.setAppElement("#__next");

export default function Sort({ totalRoom }: { totalRoom: number }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isAvailable, setIsAvailable] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleRadio(e: React.ChangeEvent<HTMLInputElement>): void {
    if (e.target.value === "available") {
      setIsAvailable(true);
      return;
    }
    setIsAvailable(false);
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
          <RadioBtn
            id="available"
            label="Available"
            name="isAvailable"
            value="available"
            onChange={handleRadio}
          />
          <RadioBtn
            id="notAvailable"
            label="Not Available"
            name="isAvailable"
            value="notAvailable"
            onChange={handleRadio}
          />
        </div>
      </Modal>
    </div>
  );
}

type TRadio = {
  name: string;
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function RadioBtn({ name, label, value, id, onChange }: TRadio) {
  return (
    <div className="flex items-center">
      <input
        type="radio"
        id={id}
        value={value}
        name={name}
        className=""
        onChange={onChange}
      />
      <label htmlFor={id} className="ml-2 text-sm">
        {label}
      </label>
    </div>
  );
}
