import type { CreateExpressContextOptions } from "@trpc/server/adapters/express";
import type { CreateNextContextOptions } from "@trpc/server/adapters/next";

import { auth } from "@kyno-ai/auth";
import { fromNodeHeaders } from "better-auth/node";

export async function createContext(opts: CreateExpressContextOptions | CreateNextContextOptions) {
  const session = await auth.api.getSession({
    headers: fromNodeHeaders(opts.req.headers),
  });
  return {
    session,
  };
}

export type Context = Awaited<ReturnType<typeof createContext>>;
