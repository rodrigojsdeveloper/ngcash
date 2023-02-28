import { Router } from "express";

import { UsersController } from "../controllers/users.controller";

import { schemaValidationMiddleware } from "../middlewares/schemaValidation.middleware";
import { tokenMiddleware } from "../middlewares/token.middleware";

import { userSchema } from "../schemas/user.schema";

const routes = Router();

const usersRoute = (): Router => {
  routes.post(
    "",
    schemaValidationMiddleware(userSchema),
    new UsersController().create
  );

  return routes;
};

const profileRoute = (): Router => {
  routes.get("", tokenMiddleware, new UsersController().profile);

  return routes;
};

export { usersRoute, profileRoute };
