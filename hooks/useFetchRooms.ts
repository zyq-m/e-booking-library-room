import { useEffect, useState } from "react";
import useSupabase from "./useSupabaseAuth";
import { fetchRooms } from "../helper/fetchRoom";
import { TRoom } from "../components/RoomCard";
import { fetchRoomByName } from "../helper/fetchRoom";

export default function useFetchRooms({
  room,
}: {
  room?: string | string[] | undefined;
}) {
  const { supabase } = useSupabase();
  const [rooms, setRooms] = useState<TRoom[] | null>([]);

  useEffect(() => {
    if (room == "all" || room == undefined) {
      fetchRooms(supabase)
        .then(res => {
          setRooms(res?.data);
        })
        .catch(err => err);
    } else {
      fetchRoomByName(supabase, room).then(res => {
        setRooms(res?.data);
      });
    }
  }, [room, supabase]);

  return rooms;
}
