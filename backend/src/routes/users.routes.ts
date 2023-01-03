import { Router } from "express";

import { UsersControllers } from "../controllers/users.controller";

import { schemaValidationMiddleware } from "../middlewares/schemaValidation.middleware";
import { tokenMiddleware } from "../middlewares/token.middleware";

import { userSchema } from "../schemas/user.schema";

const routes = Router();

const usersRoutes = (): Router => {
  routes.post(
    "",
    schemaValidationMiddleware(userSchema),
    new UsersControllers().create
  );

  routes.get("/profile", tokenMiddleware, new UsersControllers().profile);

  return routes;
};

export { usersRoutes };
