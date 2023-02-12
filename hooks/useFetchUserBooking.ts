import { useState, useEffect } from "react";
import { fetchCurrentBookedRoom } from "../helper/fetchRoom";
import useSupabase from "./useSupabaseAuth";
import { Room } from "../pages/booking";

interface Booking {
  room: Room;
}

export default function useFetchUserBooking() {
  const { supabase } = useSupabase();
  const [booking, setBooking] = useState<Booking | any>();

  useEffect(() => {
    fetchCurrentBookedRoom(supabase)
      .then(res => {
        setBooking(res.data?.[0].room);
      })
      .catch(err => err);
  }, [supabase]);

  return booking;
}
