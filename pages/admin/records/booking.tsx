import React from "react";
import BookingList from "../../../components/BookingList";
import Layout from "../../../components/Layout";
import useFetchBookings from "../../../hooks/useFetchBookings";

export default function Booking() {
  const bookings = useFetchBookings();
  return (
    <Layout>
      <div>
        <h2 className="mb-4 ml-2">Booking Records</h2>
        <BookingList list={bookings} checkbox={false} />
      </div>
    </Layout>
  );
}
