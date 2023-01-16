import React, { useEffect } from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import Carousel from "../components/Carousel";
import Search from "../components/Search";
import { TRoom } from "../components/RoomCard";

import { fetchUser } from "../helper/fetchUser";
import { fetchRooms } from "../helper/fetchRoom";
import { GetServerSidePropsContext } from "next";

interface Data {
  data: {
    data: TRoom[];
    name: string;
  };
}

export default function Home({ data }: Data) {
  return (
    <Layout>
      <div>
        <h2 className="text-xl font-medium ml-1">
          Hi {data.name}, Let{"'"}s
        </h2>
        <Search />
        <section>
          <div className="flex justify-between items-center mb-4 mx-1">
            <h2 className="text-lg">Our rooms</h2>
            <Link href="/room/all" className="text-xs lg:text-sm">
              See more
            </Link>
          </div>
          <Carousel data={data.data} />
        </section>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const token = JSON.parse(
    context.req.cookies?.["supabase-auth-token"] || ""
  )[0];
  const user = fetchUser(token);
  const rooms = fetchRooms();

  try {
    const response = await Promise.all([user, rooms]);

    const name = response[0].data?.[0]?.name;
    const roomData = response[1]?.data;

    return { props: { data: { data: roomData, name: name } } };
  } catch (error) {
    console.log(error);
  }
}
