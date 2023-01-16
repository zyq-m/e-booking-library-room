import React, { useState } from "react";

import BookingList from "../../components/BookingList";
import Button from "../../components/Button";
import Layout from "../../components/Layout";
import { fetchNotApprovedRoom } from "../../helper/fetchBooking";
import { Room } from "../booking";
import { approveBooking } from "../../helper/bookRoom";
import { useRouter } from "next/router";

export interface NotApproved {
  from: string;
  to: string;
  date: string;
  room: Room;
  user: User;
  bookingId: string;
}

interface User {
  name: string;
}

export default function Dashboard({ list }: { list: NotApproved[] }) {
  const [booking, setBooking] = useState<string[]>([]);
  const router = useRouter();

  async function onApprove() {
    try {
      await approveBooking(booking);
      alert(`${booking.length} booking have been approved`);
      router.push("/admin");
      // clear array
      // ! but array not empty
      setBooking([]);
    } catch (error) {
      console.log(error);
    }
  }

  function onReject() {
    setBooking([]);
    alert(`${booking.length} booking have been rejected`);
  }

  return (
    <Layout>
      <div>
        <h2 className="mb-4">Approval</h2>
        <BookingList
          list={list}
          checkbox={true}
          approvedList={list => setBooking(list)}
        />
        <div className="fixed right-0 bottom-0 mr-4 mb-6">
          <button
            type="button"
            id="reject"
            onClick={onReject}
            className="px-4 text-red-500">
            Reject
          </button>
          <Button
            label="Approve"
            id="approve"
            styles="px-4"
            onClick={onApprove}
          />
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const booking = await fetchNotApprovedRoom();
  return { props: { list: booking.data } };
}
