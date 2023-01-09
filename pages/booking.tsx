import React from "react";
import Layout from "../components/Layout";
import RoomCard from "../components/RoomCard";
import BookingHistoryList from "../components/BookingHistoryList";
import data, { history } from "../public/data";

export default function Booking() {
  return (
    <Layout>
      <div>
        <h2 className="mb-6 text-center text-lg">My Booking</h2>
        <label className="mx-3 text-gray-500 text-sm" htmlFor="current">
          Current
        </label>
        <div id="current" className="mt-2 mb-8 ">
          <RoomCard
            capacity={data[0].capacity}
            image={data[0].image}
            name={data[0].name}
            roomId={data[0].roomId}
            isAvailable={!data[0].isAvailable}
            isBooked={true}
            time={"11:08 - 13:09"}
          />
        </div>
        <label className="mx-3 text-gray-500 text-sm" htmlFor="recent">
          Recent
        </label>
        <BookingHistoryList list={history} />
      </div>
    </Layout>
  );
}
