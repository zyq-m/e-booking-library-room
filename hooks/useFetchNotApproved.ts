import { useState, useEffect } from "react";
import useSupabase from "./useSupabaseAuth";
import { BookingInterface } from "../pages/admin";
import { fetchNotApprovedRoom } from "../helper/fetchBooking";

export default function useFetchNotApproved({ trigger }: { trigger: boolean }) {
  const { supabase } = useSupabase();
  const [room, setRoom] = useState<BookingInterface[] | any>([]);

  useEffect(() => {
    fetchNotApprovedRoom(supabase)
      .then(res => {
        setRoom(res.data);
      })
      .catch(err => err);
  }, [supabase, trigger]);

  return room;
}
