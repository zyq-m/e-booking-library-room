import React, { useState, useMemo } from "react";
import Rooms from "../../components/Rooms";
import { TRoom } from "../../components/RoomCard";
import Sort from "../../components/Sort";

const dummyData: TRoom[] = [
  {
    name: "karel room 1",
    roomId: "room1",
    capacity: 1,
    image:
      "https://i.pinimg.com/originals/1e/e8/87/1ee887d7cfcbd959e386fee478adb0ec.jpg",
    isAvailable: true,
  },
  {
    name: "karel room 2",
    roomId: "room2",
    capacity: 1,
    image:
      "https://i.pinimg.com/originals/1e/e8/87/1ee887d7cfcbd959e386fee478adb0ec.jpg",
    isAvailable: false,
  },
  {
    name: "Meeting room",
    roomId: "room3",
    capacity: 5,
    image:
      "https://gurney.ghotel.com.my/img/asset/bWFpbi9pbWFnZXMvbWVldGluZ3MvY29uZmVyZW5jZS1pLS0taWktMDEtdjUuanBn?w=1920&fit=crop&s=027ab1a7a42b5feb2a3183fe3e952455",
    isAvailable: true,
  },
];

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
    setRooms(dummyData);
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
