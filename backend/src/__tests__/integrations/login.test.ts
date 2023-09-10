import { invalidLogin, login, user } from "../../mocks";
import { AppDataSource } from "../../data-source";
import { DataSource } from "typeorm";
import { app } from "../../app";
import request from "supertest";

describe("Testing all login routes", () => {
  let connection: DataSource;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (connection = res))
      .catch((err) =>
        console.error("Error during DataSource initialization", err)
      );

    await request(app).post("/api/users/signup").send(user);
  });

  afterAll(async () => await connection.destroy());

  test("Must be able to create a login", async () => {
    const response = await request(app).post("/api/signin").send(login);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("token");
  });

  test("Must be able to prevent the creation of a login with invalid credentials", async () => {
    const response = await request(app).post("/api/signin").send(invalidLogin);

    expect(response.status).toBe(401);
    expect(response.body).toHaveProperty("message");
  });
});
