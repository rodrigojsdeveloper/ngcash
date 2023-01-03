import { Router } from "express";

import { LoginControllers } from "../controllers/login.controller";

const routes = Router();

const sessionRoutes = () => {
  routes.post("", new LoginControllers().login);

  return routes;
};

export { sessionRoutes };
