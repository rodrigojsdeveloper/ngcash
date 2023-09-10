import { UserService } from "../../services/users.service";
import { AppDataSource } from "../../data-source";
import { DataSource } from "typeorm";
import { user } from "../../mocks";

describe("Testing all login services", () => {
  let connection: DataSource;
  let newUser: any;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (connection = res))
      .catch((err) =>
        console.error("Error during Data Source initialization", err)
      );

    newUser = await new UserService().create(user);
  });

  afterAll(async () => await connection.destroy());

  it("Must be able to create a user", async () => {
    expect(newUser).toHaveProperty("username");
    expect(newUser).not.toHaveProperty("password");
    expect(newUser).toHaveProperty("accountId");
  });

  it("Must be able to view a profile", async () => {
    const result = await new UserService().profile(newUser.username);

    expect(result).toHaveProperty("username");
    expect(result).not.toHaveProperty("password");
    expect(result).toHaveProperty("accountId");
  });
});
