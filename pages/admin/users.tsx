import React from "react";
import Layout from "../../components/Layout";
import useFetchUsers from "../../hooks/useFetchUsers";

export interface User {
  userId: string;
  name: string;
}

export default function Users() {
  const users = useFetchUsers();

  return (
    <Layout>
      <div>
        <h2 className="mb-4">Users</h2>
        <table className="w-full overflow-scroll text-sm">
          <thead>
            <tr className="border-y text-gray-400 sticky top-0 bg-gray-50">
              <th className="font-normal uppercase text-xs text-left pl-2 py-2">
                UserId
              </th>
              <th className="font-normal uppercase text-xs text-left">Name</th>
            </tr>
          </thead>
          <tbody>
            {users?.map(user => {
              return (
                <tr key={user.userId} className="border-y">
                  <td className="pl-2 py-4">{user.userId}</td>
                  <td>{user.name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

// export async function getServerSideProps() {
//   const users = await fetchUsers();

//   return { props: { users: users.data } };
// }
