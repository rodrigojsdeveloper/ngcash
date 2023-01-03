import { Express } from "express";

import { transactionsRoutes } from "./transactions.routes";
import { termsRoutes } from "./terms/terms.routes";
import { accountsRoutes } from "./account.routes";
import { sessionRoutes } from "./login.routes";
import { usersRoutes } from "./users.routes";

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
