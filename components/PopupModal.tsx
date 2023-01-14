import React from "react";
import CustomModal from "./Modal";
import { TModal } from "./Modal";

type TPopup = {
  modal: TModal;
};

export default function PopupModal({ modal }: TPopup) {
  return (
    <CustomModal closeModal={modal.closeModal} modalIsOpen={modal.modalIsOpen}>
      <h3 className="font-semibold">Booking room</h3>
    </CustomModal>
  );
}
