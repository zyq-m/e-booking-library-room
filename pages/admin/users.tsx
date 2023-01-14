import React from "react";
import Layout from "../../components/Layout";

export default function Users() {
  return (
    <Layout>
      <div>
        <h2 className="mb-4">Users</h2>
        <table className="w-full overflow-scroll text-sm">
          <thead>
            <tr className="border-y text-gray-400 sticky top-0 bg-gray-50">
              <th className="font-normal uppercase text-xs text-left pl-2 py-2">
                User
              </th>
              <th className="font-normal uppercase text-xs text-left">Email</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-y">
              <td className="pl-2 py-4">User 1</td>
              <td>email@gmail.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  );
}
