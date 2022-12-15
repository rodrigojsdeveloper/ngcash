import { handleErrorMiddleware } from "./middlewares/handleError.middleware";
import { Request, Response } from "express";
import SwaggerUi from "swagger-ui-express";
import SwaggerDocs from "./swagger.json";
import { appRoutes } from "./routes";
import express from "express";
import "express-async-errors";
const cors = require("cors");
import "reflect-metadata";
import "dotenv/config";

const app = express();

app.use(express.json());

app.use(cors());

appRoutes(app);

app.use("/docs", SwaggerUi.serve, SwaggerUi.setup(SwaggerDocs));

app.get("/terms", (req: Request, res: Response) =>
  res.json({ message: "Terms and Services" })
);

app.use(handleErrorMiddleware);

export { app };
