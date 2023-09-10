import { AccountService } from "../../services/accounts.service";
import { UserService } from "../../services/users.service";
import { AppDataSource } from "../../data-source";
import { DataSource } from "typeorm";
import { user } from "../../mocks";

describe("Testing all login services", () => {
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
    const newUser = await new UserService().create(user);

    const result = await new AccountService().specific(
      String(newUser.accountId)
    );

    expect(result).toHaveProperty("balance");
  });
});
