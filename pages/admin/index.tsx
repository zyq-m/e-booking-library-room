import React, { useState } from "react";

import BookingList, { TRecordsList } from "../../components/BookingList";
import Button from "../../components/Button";
import Layout from "../../components/Layout";
import { fetchNotApprovedRoom } from "../../helper/fetchBooking";
import { Room } from "../booking";

export interface NotApproved {
  from: string;
  to: string;
  date: string;
  room: Room;
  user: User;
}

interface User {
  name: string;
}

export default function Dashboard({ list }: { list: NotApproved[] }) {
  const [booking, setBooking] = useState<string[]>([]);

  function onApprove() {
    console.log(booking);
  }

  function onReject() {
    console.log(booking);
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
