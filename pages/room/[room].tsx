import React, { useState, useMemo, useEffect } from "react";
import { useRouter } from "next/router";
import Rooms from "../../components/Rooms";
import Sort from "../../components/Sort";
import { TRoom } from "../../components/RoomCard";
import Layout from "../../components/Layout";
import data from "../../public/data";

export default function Room({ data }: { data: TRoom[] }) {
  const router = useRouter();
  const { room } = router.query;
  const [statusRoom, setStatusRoom] = useState<boolean | undefined | string>(
    undefined
  );
  const [searchRoom, setSearchRoom] = useState<string>("");

  const filteredRoom = useMemo(getFilteredRoom, [data, searchRoom, statusRoom]);

  function getFilteredRoom() {
    if (statusRoom === "all") {
      return data;
    }

    if (statusRoom !== undefined) {
      return data.filter(room => room.isAvailable === statusRoom);
    }

    if (searchRoom && searchRoom !== "all") {
      const result = data.filter(room =>
        room.name.toLowerCase().includes(searchRoom.toLowerCase())
      );

      if (statusRoom !== undefined) {
        return result.filter(room => room.isAvailable === statusRoom);
      }

      return result;
    }

    return data;
  }

  useEffect(() => {
    setSearchRoom(room as string);
  }, [room]);

  return (
    <Layout>
      <div>
        <h2 className="mb-6 text-center text-lg">Searching Room</h2>
        <Sort
          totalRoom={filteredRoom.length}
          roomStatus={status => setStatusRoom(status)}
          search={searchRoom}
        />
        <Rooms list={filteredRoom} />
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  return { props: { data: data } };
}
