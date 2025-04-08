import type { AppRouter } from "@edgarguzman/trpc";
import {
  createTRPCClient,
  httpBatchStreamLink,
  loggerLink,
} from "@trpc/client";
import { headers } from "next/headers";
import { SuperJSON } from "superjson";

import { fetchBaseUrl } from "@/lib/fetch-base-url";

export const trpc = createTRPCClient<AppRouter>({
  links: [
    loggerLink({
      enabled: (opts) =>
        process.env.NODE_ENV === "development" ||
        (opts.direction === "down" && opts.result instanceof Error),
    }),
    httpBatchStreamLink({
      transformer: SuperJSON,
      url: fetchBaseUrl() + "/api/trpc",
      headers() {
        let head = new Headers(headers());

        head.delete("connection");
        head.delete("transfer-encoding");
        head.set("x-trpc-source", "nextjs-react");

        return head;
      },
    }),
  ],
});

export type { RouterInputs, RouterOutputs } from "@edgarguzman/trpc";
