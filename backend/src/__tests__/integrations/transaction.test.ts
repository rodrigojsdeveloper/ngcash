import { AppDataSource } from "../../data-source";
import { DataSource } from "typeorm";
import { app } from "../../app";
import request from "supertest";
import {
  login,
  transaction,
  user,
  anotherUser,
  invalidTransaction,
} from "../../mocks";

describe("Testing all transaction routes", () => {
  let connection: DataSource;
  let session: any;
  let token: string;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (connection = res))
      .catch((err) =>
        console.error("Error during Data Source initialization", err)
      );

    await request(app).post("/api/users/signup").send(user);
    await request(app).post("/api/users/signup").send(anotherUser);

    session = await request(app).post("/api/signin").send(login);

    token = session.body.token;
  });

  afterAll(async () => await connection.destroy());

  test("Must be able to create a transaction", async () => {
    const response = await request(app)
      .post("/api/transactions")
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
    await request(app)
      .post("/api/transactions")
      .send(transaction)
      .set("Authorization", `Bearer ${token}`);

    const response = await request(app)
      .post("/api/transactions")
      .send(transaction)
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("message");
  });

  test("Must be able to prevent create tokenless transaction", async () => {
    const response = await request(app)
      .post("/api/transactions")
      .send(transaction);

    expect(response.status).toBe(401);
    expect(response.body).toHaveProperty("message");
  });

  test("Must be able to prevent creation of transactions with non-existent user", async () => {
    const response = await request(app)
      .post("/api/transactions")
      .send(invalidTransaction)
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty("message");
  });

  test("Must be able to list transactions", async () => {
    const response = await request(app)
      .get("/api/transactions")
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("map");
  });

  test("Must be able to prevent listing transactions without token", async () => {
    const response = await request(app)
      .post("/api/transactions")
      .send(transaction);

    expect(response.status).toBe(401);
    expect(response.body).toHaveProperty("message");
  });

  test("Must be able to list transactions cash-in", async () => {
    const response = await request(app)
      .get("/api/transactions/cash-in")
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("map");
  });

  test("Must be able to prevent listing transactions cash-in without token", async () => {
    const response = await request(app)
      .get("/api/transactions/cash-in")
      .send(transaction);

    expect(response.status).toBe(401);
    expect(response.body).toHaveProperty("message");
  });

  test("Must be able to list transactions cash-out", async () => {
    const response = await request(app)
      .get("/api/transactions/cash-out")
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("map");
  });

  test("Must be able to prevent listing transactions cash-out without token", async () => {
    const response = await request(app)
      .get("/api/transactions/cash-out")
      .send(transaction);

    expect(response.status).toBe(401);
    expect(response.body).toHaveProperty("message");
  });

  test("Must be able to list transactions date", async () => {
    const date = new Date();

    const day = String(date.getDate() - 1).padStart(2, "0");

    const month = String(date.getMonth() + 1).padStart(2, "0");

    const year = date.getFullYear();

    const formattedDate = `${year}-${month}-${day}`;

    const response = await request(app)
      .get(`/api/transactions/${formattedDate}`)
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
      .get(`/api/transactions/${formattedDate}`)
      .send(transaction);

    expect(response.status).toBe(401);
    expect(response.body).toHaveProperty("message");
  });
});
