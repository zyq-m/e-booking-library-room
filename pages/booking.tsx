import React from "react";
import Layout from "../components/Layout";
import RoomCard from "../components/RoomCard";
import BookingHistoryList from "../components/BookingHistoryList";
import { THistory } from "../components/BookingHistoryList";
import useFetchUserBooking from "../hooks/useFetchUserBooking";
import useFetctRecentBook from "../hooks/useFetctRecentBook";

interface Data {
  data: {
    current: {
      room: Room;
    };
    history: THistory[];
  };
}

export interface Room {
  capacity: number;
  image: string;
  name: string;
  roomId: string;
  isAvailable: boolean;
  isBooked?: boolean;
  time?: string;
}

export default function Booking() {
  const current = useFetchUserBooking();
  const history = useFetctRecentBook();

  return (
    <Layout>
      <div>
        <h2 className="mb-6 text-center text-lg">My Booking</h2>
        {current && <Current current={current} />}
        <label className="mx-3 text-gray-500 text-sm" htmlFor="recent">
          Recent
        </label>
        <BookingHistoryList list={history} />
      </div>
    </Layout>
  );
}

function Current({ current }: { current: Room }) {
  return (
    <>
      <label className="mx-3 text-gray-500 text-sm" htmlFor="current">
        Current
      </label>
      <div id="current" className="mt-2 mb-8 ">
        <RoomCard
          capacity={current.capacity}
          image={current.image}
          name={current.name}
          roomId={current.roomId}
          isAvailable={!current.isAvailable}
          isBooked={current.isBooked}
          time={current.time}
        />
      </div>
    </>
  );
}
