import { Router } from "express";

import { TransactionsController } from "../controllers/transactions.controller";

import { schemaValidationMiddleware } from "../middlewares/schemaValidation.middleware";
import { tokenMiddleware } from "../middlewares/token.middleware";

import { transactionSchema } from "../schemas/transaction.schema";

const routes = Router();

const transactionsRoute = () => {
  routes.post(
    "",
    schemaValidationMiddleware(transactionSchema),
    tokenMiddleware,
    new TransactionsController().create
  );

  routes.get("", tokenMiddleware, new TransactionsController().list);

  routes.get(
    "/cash-in",
    tokenMiddleware,
    new TransactionsController().listCashIn
  );

  routes.get(
    "/cash-out",
    tokenMiddleware,
    new TransactionsController().listCashOut
  );

  routes.get(
    "/:date",
    tokenMiddleware,
    new TransactionsController().listOfCreatedAt
  );

  return routes;
};

export { transactionsRoute };
