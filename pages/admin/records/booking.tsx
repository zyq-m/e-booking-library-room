import React from "react";
import BookingList from "../../../components/BookingList";
import Layout from "../../../components/Layout";
import { fetchBooking } from "../../../helper/fetchBooking";
import { BookingInterface } from "..";

export default function Booking({ list }: { list: BookingInterface[] }) {
  return (
    <Layout>
      <div>
        <h2 className="mb-4 ml-2">Booking Records</h2>
        <BookingList list={list} checkbox={false} />
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const booking = await fetchBooking();
  return { props: { list: booking.data } };
}
