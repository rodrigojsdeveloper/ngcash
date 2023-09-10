import { AppDataSource } from "../../data-source";
import { login, user } from "../../mocks";
import { DataSource } from "typeorm";
import { app } from "../../app";
import request from "supertest";

describe("Testing all user routes", () => {
  let connection: DataSource;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (connection = res))
      .catch((err) =>
        console.error("Error during DataSource initialization", err)
      );
  });

  afterAll(async () => await connection.destroy());

  test("Must be able to create a user", async () => {
    const response = await request(app).post("/api/users/signup").send(user);

    expect(response.status).toBe(201);

    expect(response.body).toHaveProperty("username");
    expect(response.body).not.toHaveProperty("password");
    expect(response.body).toHaveProperty("accountId");
  });

  test("Must be able to prevent user creation for having less than 3 characters in username", async () => {
    user.username = "ex";

    const response = await request(app).post("/api/users/signup").send(user);

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("message");
  });

  test("Must be able to prevent user creation for having less than 8 characters in the password", async () => {
    user.password = "ex";

    const response = await request(app).post("/api/users/signup").send(user);

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("message");
  });

  test("Must be able to prevent user creation from not having capital letters in password", async () => {
    user.password = "example123";

    const response = await request(app).post("/api/users/signup").send(user);

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("message");
  });

  test("Must be able to prevent user creation from not having numbers in password", async () => {
    user.password = "EXAMPLEexample";

    const response = await request(app).post("/api/users/signup").send(user);

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("message");
  });

  test("Must be able to view a profile", async () => {
    const session = await request(app).post("/api/signin").send(login);

    const token: string = session.body.token;

    const response = await request(app)
      .get("/api/profile")
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);

    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("username");
    expect(response.body).not.toHaveProperty("password");
    expect(response.body).toHaveProperty("accountId");
  });

  test("Must be able to prevent viewing a profile without a token", async () => {
    const response = await request(app).get("/api/profile");

    expect(response.status).toBe(401);
    expect(response.body).toHaveProperty("message");
  });
});
