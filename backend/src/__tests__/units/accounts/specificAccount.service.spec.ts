import { AccountsServices } from "../../../services/accounts.service";
import { UsersServices } from "../../../services/users.service";
import { AppDataSource } from "../../../data-source";
import { DataSource } from "typeorm";
import { user } from "../../../mocks";

describe("Tests for account service", () => {
  let connection: DataSource;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (connection = res))
      .catch((err) =>
        console.error("Error during Data Source initialization", err)
      );
  });

  afterAll(async () => await connection.destroy());

  it("Must be able to view a account", async () => {
    const newUser = await new UsersServices().create(user);

    const result = await new AccountsServices().specific(
      String(newUser.accountId)
    );

    expect(result).toHaveProperty("balance");
  });
});
