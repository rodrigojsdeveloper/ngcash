import { TransactionService } from "../../services/transactions.service";
import { user, anotherUser, transaction } from "../../mocks";
import { UserService } from "../../services/users.service";
import { AppDataSource } from "../../data-source";
import { DataSource } from "typeorm";

describe("Tests for transaction service", () => {
  let connection: DataSource;
  let newUser: any;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (connection = res))
      .catch((err) =>
        console.error("Error during Data Source initialization", err)
      );
    newUser = await new UserService().create(user);

    await new UserService().create(anotherUser);
  });

  afterAll(async () => await connection.destroy());

  it("Must be able to create a transaction", async () => {
    const result = await new TransactionService().create(
      String(newUser.accountId),
      transaction
    );

    expect(result).toHaveProperty("id");
    expect(result).toHaveProperty("creditedAccountId");
    expect(result).toHaveProperty("debitedAccountId");
    expect(result).toHaveProperty("createdAt");
    expect(result).toHaveProperty("value");
  });

  it("Must be able to list transactions", async () => {
    const result = await new TransactionService().list(
      String(newUser.accountId)
    );

    expect(result).toHaveProperty("map");
  });

  it("Must be able to list transactions cash-in", async () => {
    const result = await new TransactionService().listCashIn(
      String(newUser.accountId)
    );

    expect(result).toHaveProperty("map");
  });

  it("Must be able to list transactions cash-out", async () => {
    const result = await new TransactionService().listCashOut(
      String(newUser.accountId)
    );

    expect(result).toHaveProperty("map");
  });

  it("Must be able to list transactions date", async () => {
    const date = new Date();

    const day = String(date.getDate() - 1).padStart(2, "0");

    const month = String(date.getMonth() + 1).padStart(2, "0");

    const year = date.getFullYear();

    const formattedDate = `${year}-${month}-${day}`;

    const result = await new TransactionService().listOfCreatedAt(
      String(newUser.accountId),
      formattedDate
    );

    expect(result).toHaveProperty("map");
  });
});
