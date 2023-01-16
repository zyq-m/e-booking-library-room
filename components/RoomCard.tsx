import React from "react";
import Image from "next/image";
import Button from "./Button";
import BookingForm from "./BookingForm";
import PopupModal from "./PopupModal";
import useModal from "../hooks/useModal";

export type TRoom = {
  image: string;
  name: string;
  capacity: number;
  isAvailable: boolean;
  roomId: string;
  isBooked?: boolean;
  time?: string;
};

export default function RoomCard({
  image,
  name,
  capacity,
  isAvailable,
  roomId,
  isBooked,
  time,
}: TRoom) {
  //TODO: jgn lupa manipulate roomId
  const { openModal, closeModal, modalIsOpen } = useModal();

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
        <p className="text-sm text-gray-500 flex items-center gap-3">
          For {capacity} person
          <span className="text-xs text-gray-400">{time}</span>
        </p>
        <div className="flex justify-between items-center">
          {isBooked ? (
            <>
              <p className="text-blue-400">Booked</p>
              <Button
                label="Cancel"
                styles="px-3 text-sm bg-red-500"
                disable={isAvailable && true}
                onClick={openModal}
              />
              {/* // todo: cancel popup modal "You cancel the book" */}
              <PopupModal modal={{ closeModal, modalIsOpen }} />
            </>
          ) : (
            <>
              <p
                className={
                  isAvailable ? "text-green-500" : "text-red-500 opac"
                }>
                {isAvailable ? "Available" : "Not available"}
              </p>
              <Button
                label="Book now"
                styles="px-3 text-sm"
                disable={!isAvailable && true}
                onClick={openModal}
              />
              <BookingForm
                roomId={roomId}
                modal={{ closeModal, modalIsOpen }}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
