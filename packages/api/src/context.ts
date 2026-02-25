import type { CreateExpressContextOptions } from "@trpc/server/adapters/express";
import type { CreateNextContextOptions } from "@trpc/server/adapters/next";

import { auth } from "@kyno-ai/auth";
import { fromNodeHeaders } from "better-auth/node";

export async function createContext(opts: CreateExpressContextOptions | CreateNextContextOptions | { req: Request }) {
  let headers: any;
  
  if ('req' in opts && opts.req instanceof Request) {
    // App Router format
    headers = Object.fromEntries(opts.req.headers.entries());
  } else {
    // Pages Router format
    headers = opts.req.headers;
  }

  const session = await auth.api.getSession({
    headers: fromNodeHeaders(headers),
  });
  
  return {
    session,
  };
}

export type Context = Awaited<ReturnType<typeof createContext>>;
