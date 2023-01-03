import { Express } from "express";

import { profileRoutes, usersRoutes } from "./users.routes";
import { transactionsRoutes } from "./transactions.routes";
import { accountsRoutes } from "./account.routes";
import { sessionRoutes } from "./login.routes";
import { termsRoutes } from "./terms.routes";

import SwaggerDocs from "../../docs/swagger.json";
import SwaggerUi from "swagger-ui-express";

const appRoutes = (app: Express) => {
  app.use("/users", usersRoutes());
  app.use("/profile", profileRoutes());
  app.use("/signin", sessionRoutes());
  app.use("/accounts", accountsRoutes());
  app.use("/transactions", transactionsRoutes());
  app.use("/docs", SwaggerUi.serve, SwaggerUi.setup(SwaggerDocs));
  app.use("/terms", termsRoutes());
};

export { appRoutes };
