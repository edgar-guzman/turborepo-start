import { auth } from "@edgarguzman/auth";
import { prisma } from "@edgarguzman/prisma";
import type { Session } from "next-auth";

interface CreateContextOptions {
  headers: Headers;
  session: Session | null;
}

export function createInnerTRPCContext(opts: CreateContextOptions) {
  return {
    prisma,
    ...opts,
  };
}

export async function createTRPCContext(
  opts: Pick<CreateContextOptions, "headers">
) {
  let session = await auth();

  return createInnerTRPCContext({
    headers: opts.headers,
    session,
  });
}

export type Context = Awaited<ReturnType<typeof createTRPCContext>>;
