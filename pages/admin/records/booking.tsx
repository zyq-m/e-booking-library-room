import React from "react";
import { THistory } from "../../../components/BookingHistoryList";
import Layout from "../../../components/Layout";
import { history } from "../../../public/data";

export type TRecords = THistory & {
  user: string;
};

type TRecordsList = {
  list: TRecords[];
};

export default function Booking({ list }: TRecordsList) {
  return (
    <Layout>
      <div>
        <h2 className="mb-4 ml-2">Booking Records</h2>
        <table className="w-full overflow-scroll text-sm">
          <thead>
            <tr className="border-y text-gray-400">
              <th className="font-normal uppercase text-xs text-left pl-2 py-2">
                User
              </th>
              <th className="px-8 font-normal uppercase text-xs text-right">
                Room
              </th>
              <th className="font-normal uppercase text-xs text-left">Time</th>
              <th className="font-normal uppercase text-xs text-left pr-2">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {list.map((li, i) => {
              return (
                <tr key={i} className="border-y">
                  <td className="text-left pl-2 py-4">{li.user}</td>
                  <td className="text-right px-8">{li.name}</td>
                  <td className="text-left">{li.time}</td>
                  <td className="text-left pr-2 text-gray-400">{li.date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  return { props: { list: history } };
}
