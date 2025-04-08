import { initTRPC } from "@trpc/server";
import { SuperJSON } from "superjson";
import { z } from "zod";

import { Context } from "./create-context";

// interface Meta {}

export const t = initTRPC
  // .meta<Meta>()
  .context<Context>()
  .create({
    transformer: SuperJSON,
    errorFormatter({ shape, error }) {
      return {
        ...shape,
        data: {
          ...shape.data,
          zodError:
            error.cause instanceof z.ZodError ? error.cause.flatten() : null,
        },
      };
    },
  });

export const router = t.router;

export const procedure = t.procedure;

export const middleware = t.middleware;

export const mergeRouters = t.mergeRouters;
