import { Express } from "express";

import { profileRoute, usersRoute } from "./users.routes";
import { transactionsRoute } from "./transactions.routes";
import { accountsRoute } from "./account.routes";
import { sessionRoute } from "./login.routes";
import { termsRoute } from "./terms.routes";

import SwaggerDocs from "../../docs/swagger.json";
import SwaggerUi from "swagger-ui-express";

const appRoutes = (app: Express) => {
  app.use("/users", usersRoute());
  app.use("/profile", profileRoute());
  app.use("/signin", sessionRoute());
  app.use("/accounts", accountsRoute());
  app.use("/transactions", transactionsRoute());
  app.use("/docs", SwaggerUi.serve, SwaggerUi.setup(SwaggerDocs));
  app.use("/terms", termsRoute());
};

export { appRoutes };
