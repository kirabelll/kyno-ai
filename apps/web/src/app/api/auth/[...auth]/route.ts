import { auth } from "@kyno-ai/auth";
import { toNextJsHandler } from "better-auth/nextjs";

const { GET, POST } = toNextJsHandler(auth);

export { GET, POST };