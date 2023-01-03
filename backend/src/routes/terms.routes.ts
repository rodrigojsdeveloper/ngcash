import { Router } from "express";

import { TermsControllers } from "../controllers/terms.controller";

const routes = Router();

const termsRoutes = () => {
  routes.get("", new TermsControllers().term);

  return routes;
};

export { termsRoutes };
