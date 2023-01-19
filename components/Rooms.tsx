import React, { memo } from "react";
import RoomCard, { TRoom } from "./RoomCard";

type TList = {
  list?: TRoom[] | null | undefined;
};

function Rooms({ list }: TList) {
  return (
    <div className="grid gap-4">
      {list?.map(room => {
        return (
          <RoomCard
            key={room.roomId}
            name={room.name}
            image={room.image}
            capacity={room.capacity}
            isAvailable={room.isAvailable}
            roomId={room.roomId}
          />
        );
      })}
    </div>
  );
}

export default memo(Rooms);
