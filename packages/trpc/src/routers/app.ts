import { router } from "../rpc";
import { accountRouter } from "./account";
import { sessionRouter } from "./session";
import { userRouter } from "./user";

export const appRouter = router({
  account: accountRouter,
  session: sessionRouter,
  user: userRouter,
});

export type AppRouter = typeof appRouter;
