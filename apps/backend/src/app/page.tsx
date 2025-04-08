import type { Metadata, NextPage } from "next";

import { UsersList } from "@/components/users-list";
import { trpc } from "@/trpc/server";

export function metadata(): Metadata {
  return {
    title: {
      absolute: "Edgar Guzman",
    },
  };
}

async function fetchUsers() {
  return await trpc.user.all.query();
}

const Home: NextPage = async () => {
  let users = await fetchUsers();

  return (
    <main>
      <div>
        <div>
          <h1 className="text-xl font-semibold">Server Component</h1>
          {users.map((user, index) => (
            <div key={index}>
              <h1>{user.name}</h1>
              <p>{user.email}</p>
              <p>{user.phone}</p>
              <p>{user.password}</p>
            </div>
          ))}
        </div>

        <div>
          <h1 className="text-xl font-semibold">Client Component</h1>
          <UsersList />
        </div>
      </div>
    </main>
  );
};

export default Home;
