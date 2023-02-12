import React, { useState, useMemo, useEffect } from "react";

import { useRouter } from "next/router";
import Rooms from "../../components/Rooms";
import Sort from "../../components/Sort";
import Layout from "../../components/Layout";

import useFetchRooms from "../../hooks/useFetchRooms";

export default function Room() {
  const router = useRouter();
  const { room } = router.query;
  const rooms = useFetchRooms({ room: room });

  const [statusRoom, setStatusRoom] = useState<boolean | undefined | string>(
    undefined
  );
  const [searchRoom, setSearchRoom] = useState<string>("");

  const filteredRoom = useMemo(getFilteredRoom, [rooms, statusRoom]);

  function getFilteredRoom() {
    if (statusRoom === "all") {
      return rooms;
    }

    if (statusRoom !== undefined) {
      return rooms?.filter(room => room.isAvailable === statusRoom);
    }

    return rooms;
  }

  useEffect(() => {
    setSearchRoom(room as string);
  }, [room]);

  return (
    <Layout>
      <div>
        <h2 className="mb-6 text-center text-lg">Searching Room</h2>
        <Sort
          totalRoom={filteredRoom?.length}
          roomStatus={status => setStatusRoom(status)}
          search={searchRoom}
        />
        <Rooms list={filteredRoom} />
      </div>
    </Layout>
  );
}
