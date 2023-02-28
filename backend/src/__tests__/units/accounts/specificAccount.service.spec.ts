import { AccountsService } from "../../../services/accounts.service";
import { UsersService } from "../../../services/users.service";
import { AppDataSource } from "../../../data-source";
import { user } from "../../../mocks";
import { DataSource } from "typeorm";

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
    const newUser = await new UsersService().create(user);

    const result = await new AccountsService().specific(
      String(newUser.accountId)
    );

    expect(result).toHaveProperty("balance");
  });
});
