import { Router } from "express";

import { AccountControllers } from "../controllers/accounts.controller";

import { itsYourOwnBalanceMiddleware } from "../middlewares/itsYourOwnBalance.middleware";
import { tokenMiddleware } from "../middlewares/token.middleware";

const routes = Router();

const accountsRoutes = () => {
  routes.get(
    "/:id",
    tokenMiddleware,
    itsYourOwnBalanceMiddleware,
    new AccountControllers().specific
  );

  return routes;
};

export { accountsRoutes };
