import { createContext } from "@kyno-ai/api/context";
import { appRouter } from "@kyno-ai/api/routers/index";
import { createNextApiHandler } from "@trpc/server/adapters/next";

export default createNextApiHandler({
  router: appRouter,
  createContext,
});