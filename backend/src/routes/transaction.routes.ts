import { Router } from "express";

import { TransactionController } from "../controllers/transaction.controller";

import { schemaValidationMiddleware } from "../middlewares/schemaValidation.middleware";
import { tokenMiddleware } from "../middlewares/token.middleware";

import { transactionSchema } from "../schemas/transaction.schema";

const routes = Router();

const transactionRoutes = () => {
  routes.post(
    "",
    schemaValidationMiddleware(transactionSchema),
    tokenMiddleware,
    new TransactionController().create
  );

  routes.get("", tokenMiddleware, new TransactionController().list);

  routes.get(
    "/cash-in",
    tokenMiddleware,
    new TransactionController().listCashIn
  );

  routes.get(
    "/cash-out",
    tokenMiddleware,
    new TransactionController().listCashOut
  );

  routes.get(
    "/:date",
    tokenMiddleware,
    new TransactionController().listOfCreatedAt
  );

  return routes;
};

export { transactionRoutes };
