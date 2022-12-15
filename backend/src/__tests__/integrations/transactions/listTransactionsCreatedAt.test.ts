import { session, transaction, user } from "../../../mocks";
import { AppDataSource } from "../../../data-source";
import { DataSource } from "typeorm";
import { app } from "../../../app";
import request from "supertest";

describe("Tests for transaction routes", () => {
  let connection: DataSource;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (connection = res))
      .catch((err) =>
        console.error("Error during Data Source initialization", err)
      );

    await request(app).post("/users").send(user);
  });

  afterAll(async () => await connection.destroy());

  test("Must be able to list transactions date", async () => {
    const date = new Date();

    const day = String(date.getDate() - 1).padStart(2, "0");

    const month = String(date.getMonth() + 1).padStart(2, "0");

    const year = date.getFullYear();

    const formattedDate = `${year}-${month}-${day}`;

    const login = await request(app).post("/session").send(session);

    const token: string = login.body.token;

    const response = await request(app)
      .get(`/transactions/${formattedDate}`)
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("map");
  });

  test("Must be able to prevent listing transactions date without token", async () => {
    const date = new Date();

    const day = String(date.getDate() - 1).padStart(2, "0");

    const month = String(date.getMonth() + 1).padStart(2, "0");

    const year = date.getFullYear();

    const formattedDate = `${year}-${month}-${day}`;

    const response = await request(app)
      .get(`/transactions/${formattedDate}`)
      .send(transaction);

    expect(response.status).toBe(401);
    expect(response.body).toHaveProperty("message");
  });
});
