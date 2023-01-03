import {
  login,
  transaction,
  user,
  anotherUser,
  invalidTransaction,
} from "../../../mocks";
import { AppDataSource } from "../../../data-source";
import { DataSource } from "typeorm";
import { app } from "../../../app";
import request from "supertest";

describe("Tests for transactions routes", () => {
  let connection: DataSource;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (connection = res))
      .catch((err) =>
        console.error("Error during Data Source initialization", err)
      );

    await request(app).post("/users").send(user);
    await request(app).post("/users").send(anotherUser);
  });

  afterAll(async () => await connection.destroy());

  test("Must be able to create a transaction", async () => {
    const session = await request(app).post("/signin").send(login);

    const token: string = session.body.token;

    const response = await request(app)
      .post("/transactions")
      .send(transaction)
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(201);

    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("creditedAccountId");
    expect(response.body).toHaveProperty("debitedAccountId");
    expect(response.body).toHaveProperty("value");
    expect(response.body).toHaveProperty("createdAt");
  });

  test("Must be able to prevent the creation of underbalanced transactions", async () => {
    const session = await request(app).post("/signin").send(login);

    const token: string = session.body.token;

    await request(app)
      .post("/transactions")
      .send(transaction)
      .set("Authorization", `Bearer ${token}`);

    const response = await request(app)
      .post("/transactions")
      .send(transaction)
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("message");
  });

  test("Must be able to prevent create tokenless transaction", async () => {
    const response = await request(app).post("/transactions").send(transaction);

    expect(response.status).toBe(401);
    expect(response.body).toHaveProperty("message");
  });

  test("Must be able to prevent creation of transactions with non-existent user", async () => {
    const session = await request(app).post("/signin").send(login);

    const token: string = session.body.token;

    const response = await request(app)
      .post("/transactions")
      .send(invalidTransaction)
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty("message");
  });
});
