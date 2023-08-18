import { DataSource } from "typeorm";
import path from "path";
import "dotenv/config";

const entitiesPath: string = path.join(__dirname, "./entities/*.{ts,js}");
const migrationsPath: string = path.join(__dirname, "./migrations/*.{ts,js}");

const AppDataSource =
  process.env.NODE_ENV === "test"
    ? new DataSource({
        type: "sqlite",
        database: ":memory:",
        entities: [entitiesPath],
        synchronize: true,
      })
    : new DataSource({
        type: "postgres",
        host: process.env.POSTGRES_HOST,
        port: Number(process.env.POSTGRES_PORT),
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        logging: false,
        entities: [entitiesPath],
        migrations: [migrationsPath],
      });

export { AppDataSource };
