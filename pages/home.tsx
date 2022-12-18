import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import Carousel from "../components/Carousel";
import Search from "../components/Search";

export default function Home() {
  return (
    <Layout>
      <div>
        <h2 className="text-xl font-medium">Hi Alex, Let{"'"}s</h2>
        <Search />
        <section>
          <div className="flex justify-between items-center mb-4 px-1">
            <h2 className="text-lg">Our rooms</h2>
            <Link href="/room/all" className="text-xs lg:text-sm">
              See more
            </Link>
          </div>
          <Carousel />
        </section>
      </div>
    </Layout>
  );
}
