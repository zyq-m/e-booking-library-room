import React, { memo, useState, useEffect } from "react";
import { THistory } from "./BookingHistoryList";

import { NotApproved } from "../pages/admin";
import moment from "moment";

export type TRecords = THistory & {
  user: string;
  duration: string;
};

export type TRecordsList = {
  list: NotApproved[];
  checkbox: boolean;
  approvedList?: (param: string[]) => void;
};

function BookingList({ list, checkbox, approvedList }: TRecordsList) {
  const [booking, setBooking] = useState<string[]>([]);

  function onChange(user: string, e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.checked) {
      setBooking(prev => [user, ...prev]);
    } else {
      setBooking(prev => prev.filter(prop => prop !== user));
    }
  }

  useEffect(() => {
    approvedList?.(booking);
  }, [approvedList, booking]);

  return (
    <table className="w-full overflow-scroll text-sm">
      <thead>
        <tr className="border-y text-gray-400 sticky top-0 bg-gray-50">
          {checkbox && <th></th>}
          <th
            className={`font-normal uppercase text-xs text-left py-2 ${
              !checkbox && `pl-2`
            }`}>
            User
          </th>
          <th className="px-8 font-normal uppercase text-xs text-right">
            Room
          </th>
          <th className="font-normal uppercase text-xs text-center">Time</th>
          <th className="font-normal uppercase text-xs text-right pr-3">
            Duration
          </th>
          <th className="font-normal uppercase text-xs text-left pr-2">Date</th>
        </tr>
      </thead>
      <tbody>
        {list.map((li, i) => {
          let from = moment(`${li.from}`, "HH:mm");
          let to = moment(`${li.to}`, "HH:mm");

          return (
            <tr key={i} className="border-y">
              {checkbox && (
                <td>
                  <input
                    type="checkbox"
                    className="ml-2"
                    onChange={e => onChange(li.user.name, e)}
                  />
                </td>
              )}
              <td className={`text-left py-4 ${!checkbox && `pl-2`}`}>
                {li.user.name}
              </td>
              <td className="text-right px-8">{li.room.name}</td>
              <td className="text-center">{from.format("HH:mm")}</td>
              <td className="text-right pr-3">
                {to.diff(from, "hours")} hours
              </td>
              <td className="text-left pr-2 text-gray-400">{li.date}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default memo(BookingList);
