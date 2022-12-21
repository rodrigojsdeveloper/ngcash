import { Express } from "express";

import { transactionsRoutes } from "./transactions/transactions.routes";
import { accountsRoutes } from "./accounts/account.routes";
import { sessionRoutes } from "./session/session.routes";
import { usersRoutes } from "./users/users.routes";
import { termsRoutes } from "./terms/terms.routes";

import SwaggerDocs from "../../docs/swagger.json";
import SwaggerUi from "swagger-ui-express";

const appRoutes = (app: Express) => {
  app.use("/users", usersRoutes());
  app.use("/session", sessionRoutes());
  app.use("/accounts", accountsRoutes());
  app.use("/transactions", transactionsRoutes());
  app.use("/docs", SwaggerUi.serve, SwaggerUi.setup(SwaggerDocs));
  app.use("/terms", termsRoutes());
};

export { appRoutes };
