import { auth } from "@kyno-ai/auth";
import { toNodeHandler } from "better-auth/node";
import type { VercelRequest, VercelResponse } from "@vercel/node";

export default toNodeHandler(auth);