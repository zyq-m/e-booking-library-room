import React from "react";
import Image from "next/image";
import Button from "./Button";
import CustomModal from "./Modal";
import useModal from "../hooks/useModal";

export type TRoom = {
  image: string;
  name: string;
  capacity: number;
  isAvailable: boolean;
  roomId: string;
};

export default function RoomCard({
  image,
  name,
  capacity,
  isAvailable,
  roomId,
}: TRoom) {
  //TODO: jgn lupa manipulate roomId
  const { closeModal, modalIsOpen, openModal } = useModal();

  return (
    <div className="flex gap-3 items-center p-2 rounded-lg bg-white">
      <Image
        loader={() => image}
        src="img.jpg"
        alt="study room"
        width={200}
        height={200}
        style={{
          width: 130,
          height: 130,
          maxWidth: "100%",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />
      <div className="flex-1">
        <p className="font-medium text-lg capitalize">{name}</p>
        <p className="text-sm">For {capacity} person</p>
        <div className="flex justify-between items-center">
          <p className={isAvailable ? "text-green-500" : "text-red-500 opac"}>
            {isAvailable ? "Available" : "Not available"}
          </p>
          <Button
            label="Book now"
            styles="px-3 text-sm disabled:opacity-70"
            disable={!isAvailable && true}
            onClick={openModal}
          />
        </div>
      </div>
      <CustomModal modalIsOpen={modalIsOpen} closeModal={closeModal}>
        <h3 className="mb-4 font-semibold">Booking room</h3>
        <form>
          <div className="flex gap-4 mb-4">
            <Input id="from" label="From" type="time" />
            <Input id="to" label="To" type="time" />
          </div>
          <Button label="Book Now" styles="w-full rounded-lg" />
        </form>
      </CustomModal>
    </div>
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
      <label htmlFor={id} className="block text-sm ml-1">
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
