import { handleErrorMiddleware } from "./middlewares/handleError.middleware";
import { appRoutes } from "./routes";
import express from "express";
import "express-async-errors";
import cors from "cors";
import "dotenv/config";

const app = express();

app.use(express.json());

app.use(cors());

app.disable("x-powered-by");

appRoutes(app, "api");

app.use(handleErrorMiddleware);

export { app };
