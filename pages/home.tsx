import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import Carousel from "../components/Carousel";
import Search from "../components/Search";
import { TRoom } from "../components/RoomCard";

import useFetchName from "../hooks/useFetchName";
import useFetchRooms from "../hooks/useFetchRooms";

interface Data {
  data: {
    data: TRoom[];
    name: string;
  };
}

export default function Home() {
  const name = useFetchName();
  const rooms = useFetchRooms({});

  return (
    <Layout>
      <div>
        <h2 className="text-xl font-medium ml-1">
          Hi {name}, Let{"'"}s
        </h2>
        <Search />
        <section>
          <div className="flex justify-between items-center mb-4 mx-1">
            <h2 className="text-lg">Our rooms</h2>
            <Link href="/room/all" className="text-xs lg:text-sm">
              See more
            </Link>
          </div>
          <Carousel data={rooms} />
        </section>
      </div>
    </Layout>
  );
}
