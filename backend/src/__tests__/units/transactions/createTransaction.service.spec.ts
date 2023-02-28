import { TransactionsService } from "../../../services/transactions.service";
import { user, anotherUser, transaction } from "../../../mocks";
import { UsersService } from "../../../services/users.service";
import { AppDataSource } from "../../../data-source";
import { DataSource } from "typeorm";

describe("Tests for transaction service", () => {
  let connection: DataSource;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (connection = res))
      .catch((err) =>
        console.error("Error during Data Source initialization", err)
      );

    await new UsersService().create(anotherUser);
  });

  afterAll(async () => await connection.destroy());

  it("Must be able to create a transaction", async () => {
    const newUser = await new UsersService().create(user);

    const result = await new TransactionsService().create(
      String(newUser.accountId),
      transaction
    );

    expect(result).toHaveProperty("id");
    expect(result).toHaveProperty("creditedAccountId");
    expect(result).toHaveProperty("debitedAccountId");
    expect(result).toHaveProperty("createdAt");
    expect(result).toHaveProperty("value");
  });
});
