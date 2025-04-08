import type { inferRouterInputs, inferRouterOutputs } from "@trpc/server";

import type { AppRouter } from "./routers/app";

export { createTRPCContext } from "./create-context";

export { appRouter } from "./routers/app";
export type { AppRouter } from "./routers/app";

export type RouterInputs = inferRouterInputs<AppRouter>;

export type RouterOutputs = inferRouterOutputs<AppRouter>;
