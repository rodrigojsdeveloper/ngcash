import { createTransactionService } from "../../../services/transactions/createTransaction.service";
import { createUserService } from "../../../services/users/createUser.service";
import { user, anotherUser, transaction } from "../../../mocks";
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

    await createUserService(anotherUser);
  });

  afterAll(async () => await connection.destroy());

  it("Must be able to create a transaction", async () => {
    const newUser = await createUserService(user);

    const result = await createTransactionService(
      newUser.accountId,
      transaction
    );

    expect(result).toHaveProperty("id");
    expect(result).toHaveProperty("creditedAccountId");
    expect(result).toHaveProperty("debitedAccountId");
    expect(result).toHaveProperty("createdAt");
    expect(result).toHaveProperty("value");
  });
});
