import React from "react";
import BookingList, { TRecordsList } from "../../../components/BookingList";
import Layout from "../../../components/Layout";
import { history } from "../../../public/data";

export default function Booking({ list }: TRecordsList) {
  return (
    <Layout>
      <div>
        <h2 className="mb-4 ml-2">Booking Records</h2>
        <BookingList list={list} checkbox={false} />
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  return { props: { list: history } };
}
