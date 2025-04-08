import { Role } from "@edgarguzman/prisma";
import * as trpc from "@trpc/server";

import { t } from "./rpc";

export const publicProcedure = t.procedure;

export const userProcedure = t.procedure.use(({ ctx, next }) => {
  if (!ctx.session || !ctx.session.user)
    throw new trpc.TRPCError({
      code: "UNAUTHORIZED",
    });

  return next({
    ctx: {
      ...ctx,
      session: {
        ...ctx.session,
        user: ctx.session.user,
      },
    },
  });
});

export const adminProcedure = t.procedure.use(async ({ ctx, next }) => {
  const { role } =
    (await ctx.prisma.user.findFirst({
      where: {
        id: ctx.session.user.id,
      },
      select: {
        role: true,
      },
    })) ?? {};

  if (role !== Role.Admin)
    throw new trpc.TRPCError({
      code: "UNAUTHORIZED",
    });

  return next({
    ctx,
  });
});
