import { Router } from "express";

import { UserController } from "../controllers/users.controller";

import { schemaValidationMiddleware } from "../middlewares/schemaValidation.middleware";
import { tokenMiddleware } from "../middlewares/token.middleware";

import { userSchema } from "../schemas/user.schema";

const routes = Router();

const userRoutes = (): Router => {
  routes.post(
    "/signup",
    schemaValidationMiddleware(userSchema),
    new UserController().create
  );

  return routes;
};

const profileRoutes = (): Router => {
  routes.get("", tokenMiddleware, new UserController().profile);

  return routes;
};

export { userRoutes, profileRoutes };
