import { Router } from "express";

import { LoginController } from "../controllers/login.controller";

const routes = Router();

const sessionRoute = () => {
  routes.post("", new LoginController().login);

  return routes;
};

export { sessionRoute };
