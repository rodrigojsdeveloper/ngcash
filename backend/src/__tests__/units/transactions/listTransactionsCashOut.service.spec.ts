import { TransactionsService } from "../../../services/transactions.service";
import { UsersService } from "../../../services/users.service";
import { AppDataSource } from "../../../data-source";
import { user } from "../../../mocks";
import { DataSource } from "typeorm";

describe("Tests for transaction service", () => {
  let connection: DataSource;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (connection = res))
      .catch((err) =>
        console.error("Error during Data Source initialization", err)
      );
  });

  afterAll(async () => await connection.destroy());

  it("Must be able to list transactions cash-out", async () => {
    const newUser = await new UsersService().create(user);

    const result = await new TransactionsService().listCashOut(
      String(newUser.accountId)
    );

    expect(result).toHaveProperty("map");
  });
});
