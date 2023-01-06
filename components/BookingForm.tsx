import React, { useRef, forwardRef } from "react";
import moment from "moment";
import CustomModal from "./Modal";
import Button from "./Button";
import { TModal } from "./Modal";

type TForm = {
  roomId: string;
  modal: TModal;
};

export default function BookingForm({ roomId, modal }: TForm) {
  const fromRef = useRef<HTMLInputElement>(null);
  const toRef = useRef<HTMLInputElement>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e?.preventDefault();

    const from = moment.duration(fromRef.current?.value, "h");
    const to = moment.duration(toRef.current?.value, "h");
    const duration = to.subtract(from).hours();

    if (duration >= 5) {
      // TODO: need permission
    }

    if (duration < 0) {
      alert("You cannot book during this hour");
    }

    if (fromRef.current?.value == "" && toRef.current?.value == "") {
      alert("Please select time");
    }

    console.log(roomId, fromRef.current?.value, toRef.current?.value);

    // todo: push notification to user after book
    // modal.closeModal();
  }

  return (
    <CustomModal modalIsOpen={modal.modalIsOpen} closeModal={modal.closeModal}>
      <h3 className="font-semibold">Booking room</h3>
      <p className="mb-4 text-xs text-gray-400">
        Duration more than 5 hours need to be verify by admin
      </p>
      <form onSubmit={onSubmit}>
        <div className="flex gap-4 mb-4">
          <Input ref={fromRef} id="from" label="From" type="time" />
          <Input ref={toRef} id="to" label="To" type="time" />
        </div>
        <Button
          label="Book Now"
          id="book"
          styles="w-full rounded-lg"
          type="submit"
        />
      </form>
    </CustomModal>
  );
}

type TInput = {
  label: string;
  id: string;
  type: React.HTMLInputTypeAttribute;
};

const Input = React.forwardRef<HTMLInputElement, TInput>((props, ref) => {
  return (
    <div>
      <label htmlFor={props.id} className="block text-sm text-gray-500 ml-1">
        {props.label}
      </label>
      <input
        ref={ref}
        type={props.type}
        id={props.id}
        className="border px-3 py-2 rounded-lg"
      />
    </div>
  );
});

Input.displayName = "Input";
