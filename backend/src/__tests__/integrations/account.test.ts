import { AppDataSource } from "../../data-source";
import { login, user } from "../../mocks";
import { DataSource } from "typeorm";
import { app } from "../../app";
import request from "supertest";

describe("Testing all account routes", () => {
  let connection: DataSource;
  let newUser: any;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (connection = res))
      .catch((err) =>
        console.error("Error during DataSource initialization", err)
      );

    newUser = await request(app).post("/api/users/signup").send(user);
  });

  afterAll(async () => await connection.destroy());

  test("Must be able to view a account", async () => {
    const session = await request(app).post("/api/signin").send(login);

    const token: string = session.body.token;

    const response = await request(app)
      .get(`/api/accounts/${newUser.body.accountId}`)
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("balance");
  });

  test("Must be able to prevent create tokenless account", async () => {
    const response = await request(app).get(
      `/api/accounts/${newUser.body.accountId}`
    );

    expect(response.status).toBe(401);
    expect(response.body).toHaveProperty("message");
  });
});
