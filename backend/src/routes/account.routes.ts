import { Router } from "express";

import { AccountController } from "../controllers/account.controller";

import { itsYourOwnBalanceMiddleware } from "../middlewares/itsYourOwnBalance.middleware";
import { tokenMiddleware } from "../middlewares/token.middleware";

const routes = Router();

const accountRoutes = () => {
  routes.get(
    "/:id",
    tokenMiddleware,
    itsYourOwnBalanceMiddleware,
    new AccountController().specific
  );

  return routes;
};

export { accountRoutes };
