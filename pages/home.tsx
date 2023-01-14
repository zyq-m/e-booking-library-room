import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import Carousel from "../components/Carousel";
import Search from "../components/Search";
import data from "../public/data";
import { TRoom } from "../components/RoomCard";

export default function Home({ data }: { data: TRoom[] }) {
  return (
    <Layout>
      <div>
        <h2 className="text-xl font-medium ml-1">Hi Alex, Let{"'"}s</h2>
        <Search />
        <section>
          <div className="flex justify-between items-center mb-4 mx-1">
            <h2 className="text-lg">Our rooms</h2>
            <Link href="/room/all" className="text-xs lg:text-sm">
              See more
            </Link>
          </div>
          <Carousel data={data} />
        </section>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  return { props: { data: data } };
}
