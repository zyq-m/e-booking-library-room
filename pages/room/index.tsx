import React, { useState, useMemo } from "react";
import Rooms from "../../components/Rooms";
import Sort from "../../components/Sort";
import data from "../../public/data";
import { TRoom } from "../../components/RoomCard";

export default function Room() {
  const [statusRoom, setStatusRoom] = useState<boolean | string>("all");
  const [rooms, setRooms] = useState<TRoom[]>([]);

  const filteredRoom = useMemo(getFilteredRoom, [rooms, statusRoom]);

  function getFilteredRoom() {
    if (statusRoom === "all") {
      return rooms;
    }
    return rooms.filter(room => room.isAvailable === statusRoom);
  }

  React.useEffect(() => {
    setRooms(data);
  }, []);

  return (
    <div>
      <h2 className="mb-6 text-center text-lg">Searching Room</h2>
      <Sort
        totalRoom={filteredRoom.length}
        roomStatus={status => setStatusRoom(status)}
      />
      <Rooms list={filteredRoom} />
    </div>
  );
}
