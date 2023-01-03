import { Router } from "express";

import { TransactionsControllers } from "../controllers/transactions.controller";

import { schemaValidationMiddleware } from "../middlewares/schemaValidation.middleware";
import { tokenMiddleware } from "../middlewares/token.middleware";

import { transactionSchema } from "../schemas/transaction.schema";

const routes = Router();

const transactionsRoutes = () => {
  routes.post(
    "",
    schemaValidationMiddleware(transactionSchema),
    tokenMiddleware,
    new TransactionsControllers().create
  );

  routes.get("", tokenMiddleware, new TransactionsControllers().list);

  routes.get(
    "/cash-in",
    tokenMiddleware,
    new TransactionsControllers().listCashIn
  );

  routes.get(
    "/cash-out",
    tokenMiddleware,
    new TransactionsControllers().listCashOut
  );

  routes.get(
    "/:date",
    tokenMiddleware,
    new TransactionsControllers().listOfCreatedAt
  );

  return routes;
};

export { transactionsRoutes };
