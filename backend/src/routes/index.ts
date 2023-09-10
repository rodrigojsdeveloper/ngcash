import { Express } from "express";

import { profileRoutes, userRoutes } from "./user.routes";
import { transactionRoutes } from "./transaction.routes";
import { accountRoutes } from "./account.routes";
import { loginRoutes } from "./login.routes";
import { termsRoutes } from "./terms.routes";

import SwaggerDocs from "../../docs/swagger.json";
import SwaggerUi from "swagger-ui-express";

const appRoutes = (app: Express, endPoint: string) => {
  app.use(`/${endPoint}/users`, userRoutes());
  app.use(`/${endPoint}/profile`, profileRoutes());
  app.use(`/${endPoint}/signin`, loginRoutes());
  app.use(`/${endPoint}/accounts`, accountRoutes());
  app.use(`/${endPoint}/transactions`, transactionRoutes());
  app.use(`/${endPoint}/docs`, SwaggerUi.serve, SwaggerUi.setup(SwaggerDocs));
  app.use(`/${endPoint}/terms`, termsRoutes());
};

export { appRoutes };
