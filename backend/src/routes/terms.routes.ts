import { Router } from "express";

import { TermsController } from "../controllers/terms.controller";

const routes = Router();

const termsRoutes = () => {
  routes.get("", new TermsController().term);

  return routes;
};

export { termsRoutes };
