import React, { useState } from "react";

export default function useModal() {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return { modalIsOpen, openModal, closeModal };
}
