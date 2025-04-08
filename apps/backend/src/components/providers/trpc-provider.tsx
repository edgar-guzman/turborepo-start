"use client";

import type { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import { httpBatchStreamLink } from "@trpc/react-query";
import React from "react";
import { SuperJSON } from "superjson";

import { fetchBaseUrl } from "@/lib/fetch-base-url";
import { trpc } from "@/trpc/client";
import { makeQueryClient } from "@/trpc/query-client";

interface TRPCReactProviderProps {
  children: React.ReactNode;
}

let clientQueryClientSingleton: QueryClient;

function fetchQueryClient() {
  if (typeof window === "undefined") return makeQueryClient();

  return (clientQueryClientSingleton ??= makeQueryClient());
}

export const TRPCReactProvider: React.FC<TRPCReactProviderProps> = (props) => {
  let queryClient = fetchQueryClient();

  let [trpcClient] = React.useState(() =>
    trpc.createClient({
      links: [
        httpBatchStreamLink({
          transformer: SuperJSON,
          url: fetchBaseUrl() + "/api/trpc",
          headers() {
            let headers = new Headers();

            headers.set("x-trpc-source", "nextjs-react");

            return headers;
          },
        }),
      ],
    })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        {props.children}
      </QueryClientProvider>
    </trpc.Provider>
  );
};
