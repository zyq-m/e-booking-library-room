import React, { useState, useMemo, useEffect } from "react";
import { GetServerSidePropsContext } from "next";

import { useRouter } from "next/router";
import Rooms from "../../components/Rooms";
import Sort from "../../components/Sort";
import { TRoom } from "../../components/RoomCard";
import Layout from "../../components/Layout";

import { fetchRooms, fetchRoomByName } from "../../helper/fetchRoom";

export default function Room({ data }: { data: TRoom[] }) {
  const router = useRouter();
  const { room } = router.query;
  const [statusRoom, setStatusRoom] = useState<boolean | undefined | string>(
    undefined
  );
  const [searchRoom, setSearchRoom] = useState<string>("");

  const filteredRoom = useMemo(getFilteredRoom, [data, statusRoom]);

  function getFilteredRoom() {
    if (statusRoom === "all") {
      return data;
    }

    if (statusRoom !== undefined) {
      return data.filter(room => room.isAvailable === statusRoom);
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

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const {
    query: { room },
  } = context;
  // get token to get user id
  const token = JSON.parse(
    context.req.cookies?.["supabase-auth-token"] || ""
  )[0];

  let data;

  if (room == "all") {
    data = await fetchRooms();
  } else {
    data = await fetchRoomByName(room);
  }

  return { props: { data: data?.data } };
}
