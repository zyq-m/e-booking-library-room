import { useState, useEffect } from "react";
import { BookingInterface } from "../pages/admin";
import useSupabase from "./useSupabaseAuth";
import { fetchBooking } from "../helper/fetchBooking";

export default function useFetchBookings() {
  const [bookings, setBookings] = useState<BookingInterface[] | any>([]);
  const { supabase } = useSupabase();

  useEffect(() => {
    fetchBooking(supabase)
      .then(res => setBookings(res.data))
      .catch(err => err);
  }, [supabase]);

  return bookings;
}
