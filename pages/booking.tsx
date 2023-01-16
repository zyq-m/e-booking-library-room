import React from "react";
import Layout from "../components/Layout";
import RoomCard from "../components/RoomCard";
import BookingHistoryList from "../components/BookingHistoryList";
import { GetServerSidePropsContext } from "next";
import {
  fetchCurrentBookedRoom,
  fetchHistoryBooked,
} from "../helper/fetchRoom";
import { THistory } from "../components/BookingHistoryList";

interface Data {
  data: {
    current: {
      room: Room;
    };
    history: THistory[];
  };
}

export interface Room {
  capacity: number;
  image: string;
  name: string;
  roomId: string;
  isAvailable: boolean;
  isBooked: boolean;
  time: string;
}

export default function Booking({ data }: Data) {
  return (
    <Layout>
      <div>
        <h2 className="mb-6 text-center text-lg">My Booking</h2>
        {data.current.room && (
          <>
            <label className="mx-3 text-gray-500 text-sm" htmlFor="current">
              Current
            </label>
            <div id="current" className="mt-2 mb-8 ">
              <RoomCard
                capacity={data.current.room.capacity}
                image={data.current.room.image}
                name={data.current.room.name}
                roomId={data.current.room.roomId}
                isAvailable={!data.current.room.isAvailable}
                isBooked={data.current.room.isBooked}
                time={data.current.room.time}
              />
            </div>
          </>
        )}
        <label className="mx-3 text-gray-500 text-sm" htmlFor="recent">
          Recent
        </label>
        <BookingHistoryList list={data.history} />
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const token = JSON.parse(
    context.req.cookies?.["supabase-auth-token"] || ""
  )[0];

  // fetch current booking
  // fetch booking history
  const current = fetchCurrentBookedRoom(token);
  const history = fetchHistoryBooked(token);

  try {
    const response = await Promise.all([current, history]);

    return {
      props: {
        data: {
          current: response[0].data?.[0],
          history: response[1].data,
        },
      },
    };
  } catch (error) {
    console.log(error);
  }
}
