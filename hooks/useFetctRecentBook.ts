import { useState, useEffect } from "react";
import { THistory } from "../components/BookingHistoryList";
import useSupabase from "./useSupabaseAuth";
import { fetchHistoryBooked } from "../helper/fetchRoom";

interface History {
  history: THistory;
}
export default function useFetctRecentBook() {
  const { supabase } = useSupabase();
  const [history, setHistory] = useState<History | any>();

  useEffect(() => {
    fetchHistoryBooked(supabase).then(res => {
      setHistory(res.data);
    });
  }, [supabase]);

  return history;
}
