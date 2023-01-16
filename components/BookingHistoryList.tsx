import React, { memo } from "react";
import { Room } from "../pages/booking";

export type THistory = {
  room: Room;
  date: string;
  time?: string;
};

type THList = {
  list: THistory[];
};

function BookingHistoryList({ list }: THList) {
  return (
    <ul id="recent" className="mt-2 text-gray-400 text">
      {list.map((data, i) => {
        return (
          <li
            key={i}
            className="flex justify-between items-center py-2 px-3 rounded-md hover:bg-gray-100">
            <p className="capitalize">{data.room.name}</p>
            <p className="text-sm">{data.date}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default memo(BookingHistoryList);
