import type { AppRouter } from "@edgarguzman/trpc";
import { createTRPCReact } from "@trpc/react-query";

export const trpc = createTRPCReact<AppRouter>();

export type { RouterInputs, RouterOutputs } from "@edgarguzman/trpc";
