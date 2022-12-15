import { Router } from "express";

import { viewProfileController } from "../../controllers/users/viewProfile.controller";
import { createUserController } from "../../controllers/users/createUser.controller";

import { schemaValidationMiddleware } from "../../middlewares/schemaValidation.middleware";
import { tokenMiddleware } from "../../middlewares/token.middleware";

import { userSchema } from "../../schemas/user.schema";

const routes = Router();

const usersRoutes = () => {
  routes.post("", schemaValidationMiddleware(userSchema), createUserController);

  routes.get("/profile", tokenMiddleware, viewProfileController);

  return routes;
};

export { usersRoutes };
