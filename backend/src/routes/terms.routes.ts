import { Router } from "express";

import { TermsController } from "../controllers/terms.controller";

const routes = Router();

const termsRoute = () => {
  routes.get("", new TermsController().term);

  return routes;
};

export { termsRoute };
