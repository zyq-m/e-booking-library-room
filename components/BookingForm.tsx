import React from "react";
import CustomModal from "./Modal";
import Button from "./Button";
import { TModal } from "./Modal";

type TForm = {
  roomId: string;
  modal: TModal;
};

export default function BookingForm({ roomId, modal }: TForm) {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e?.preventDefault();
    console.log(roomId);
    modal.closeModal();
  }
  return (
    <CustomModal modalIsOpen={modal.modalIsOpen} closeModal={modal.closeModal}>
      <h3 className="font-semibold">Booking room</h3>
      <p className="mb-4 text-xs text-gray-400">
        Duration more than 3 hours need to be verify by admin
      </p>
      <form onSubmit={onSubmit}>
        <div className="flex gap-4 mb-4">
          <Input id="from" label="From" type="time" />
          <Input id="to" label="To" type="time" />
        </div>
        <Button label="Book Now" styles="w-full rounded-lg" type="submit" />
      </form>
    </CustomModal>
  );
}

type TInput = {
  label: string;
  id: string;
  type: React.HTMLInputTypeAttribute;
  ref?: React.LegacyRef<HTMLInputElement> | undefined;
};

export function Input({ label, id, type, ref }: TInput) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm text-gray-500 ml-1">
        {label}
      </label>
      <input
        ref={ref}
        type={type}
        id={id}
        className="border px-3 py-2 rounded-lg"
      />
    </div>
  );
}
