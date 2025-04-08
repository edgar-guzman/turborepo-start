"use client";

import React from "react";

import { trpc } from "@/trpc/client";

export const UsersList: React.FC = () => {
  let list = trpc.user.all.useQuery();

  return (
    <div>
      <div>
        {list?.data?.map((user, index) => (
          <div key={index}>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
