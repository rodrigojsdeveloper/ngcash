import { AppDataSource } from "../../../data-source";
import { session, user } from "../../../mocks";
import { DataSource } from "typeorm";
import { app } from "../../../app";
import request from "supertest";

describe("Tests for session routes", () => {
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

  test("Must be able to create a session", async () => {
    const response = await request(app).post("/session").send(session);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("token");
  });

  test("Must be able to prevent the creation of a session with invalid credentials", async () => {
    session.password = "username";

    const response = await request(app).post("/session").send(session);

    expect(response.status).toBe(401);
    expect(response.body).toHaveProperty("message");
  });
});
