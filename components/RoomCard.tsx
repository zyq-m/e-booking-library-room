import React from "react";
import Image from "next/image";
import Button from "./Button";

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
  return (
    <div className="flex gap-3 items-center p-2 rounded-lg bg-gray-50">
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
          />
        </div>
      </div>
    </div>
  );
}
