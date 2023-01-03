import { AppDataSource } from "../../../data-source";
import { login, user } from "../../../mocks";
import { DataSource } from "typeorm";
import { app } from "../../../app";
import request from "supertest";

describe("Tests for users routes", () => {
  let connection: DataSource;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (connection = res))
      .catch((err) =>
        console.error("Error during DataSource initialization", err)
      );

    await request(app).post("/users").send(user);
  });

  afterAll(async () => await connection.destroy());

  test("Must be able to view a profile", async () => {
    const session = await request(app).post("/signin").send(login);

    const token: string = session.body.token;

    const response = await request(app)
      .get("/profile")
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);

    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("username");
    expect(response.body).not.toHaveProperty("password");
    expect(response.body).toHaveProperty("accountId");
  });

  test("Must be able to prevent viewing a profile without a token", async () => {
    const response = await request(app).get("/profile");

    expect(response.status).toBe(401);
    expect(response.body).toHaveProperty("message");
  });
});
