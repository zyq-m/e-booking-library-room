import React, { useState } from "react";
import Modal from "react-modal";

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

Modal.setAppElement("#__next");

type TModel = {
  children: React.ReactNode;
  modalIsOpen: boolean;
  closeModal: () => void;
};

export default function CustomModal({
  children,
  modalIsOpen,
  closeModal,
}: TModel) {
  return (
    <Modal
      closeTimeoutMS={200}
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}>
      <>{children}</>
    </Modal>
  );
}
