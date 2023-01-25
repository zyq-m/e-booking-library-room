import React, { useRef, useState } from "react";
import moment from "moment";

import CustomModal from "./Modal";
import Button from "./Button";
import { TModal } from "./Modal";
import Input from "./Input";
import { bookRoom, bookRoomPermission } from "../helper/bookRoom";
import useSupabase from "../hooks/useSupabaseAuth";
import { useRouter } from "next/router";

type TForm = {
  roomId: string;
  modal: TModal;
};

export default function BookingForm({ roomId, modal }: TForm) {
  const fromRef = useRef<HTMLInputElement>(null);
  const toRef = useRef<HTMLInputElement>(null);
  const { supabase } = useSupabase();
  const [disableBtn, setDisableBtn] = useState(false);
  const router = useRouter();

  function bookSuccess() {
    alert("Room successfully booked");
    modal.closeModal();
    router.push("/home");
  }

  function bookFail(error: string | unknown) {
    alert(error);
    modal.closeModal();
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e?.preventDefault();

    const from = moment.duration(fromRef.current?.value, "h");
    const to = moment.duration(toRef.current?.value, "h");
    const duration = to.subtract(from).hours();

    if (duration >= 5) {
      // TODO: need permission
      return bookRoomPermission(
        supabase,
        fromRef.current?.value,
        toRef.current?.value,
        roomId
      )
        .then(bookSuccess)
        .catch(error => bookFail(error));
    }

    if (duration < 0) {
      alert("You cannot book during this hour");
      return;
    }

    if (fromRef.current?.value == "" || toRef.current?.value == "") {
      alert("Please select time");
      return;
    }

    try {
      setDisableBtn(true);

      await bookRoom(
        supabase,
        fromRef.current?.value,
        toRef.current?.value,
        roomId
      );

      // todo: push notification to user after book
      bookSuccess();
    } catch (error) {
      bookFail(error);
    }

    setDisableBtn(false);
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
          disable={disableBtn}
        />
      </form>
    </CustomModal>
  );
}
