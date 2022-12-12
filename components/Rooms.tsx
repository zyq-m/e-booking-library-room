import React, { memo } from "react";
import RoomCard, { TRoom } from "./RoomCard";

type TList = {
  list: TRoom[];
};

function Rooms({ list }: TList) {
  return (
    <div className="grid gap-4">
      {list.map((room, i) => {
        return (
          <RoomCard
            key={i}
            name={room.name}
            image={room.image}
            capacity={room.capacity}
            isAvailable={room.isAvailable}
          />
        );
      })}
    </div>
  );
}

export default memo(Rooms);
