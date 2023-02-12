import React, { useState } from "react";

import BookingList from "../../components/BookingList";
import Button from "../../components/Button";
import Layout from "../../components/Layout";
import { Room } from "../booking";
import { approveBooking } from "../../helper/bookRoom";
import useFetchNotApproved from "../../hooks/useFetchNotApproved";
import useSupabase from "../../hooks/useSupabaseAuth";

export interface BookingInterface {
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

export default function Dashboard() {
  const [booking, setBooking] = useState<string[]>([]);
  const [trigger, setTrigger] = useState<boolean>(false);
  const room = useFetchNotApproved({ trigger: trigger });
  const { supabase } = useSupabase();

  async function onApprove() {
    try {
      await approveBooking(supabase, booking);
      alert(`${booking.length} booking have been approved`);
      setTrigger(!trigger);

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
          list={room}
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
