import { createUserService } from "../../../services/users/createUser.service";
import { AppDataSource } from "../../../data-source";
import { user } from "../../../mocks";
import { DataSource } from "typeorm";

describe("Tests for user service", () => {
  let connection: DataSource;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (connection = res))
      .catch((err) =>
        console.error("Error during Data Source initialization", err)
      );
  });

  afterAll(async () => await connection.destroy());

  it("Must be able to create a user", async () => {
    const result = await createUserService(user);

    expect(result).toHaveProperty("username");
    expect(result).not.toHaveProperty("password");
    expect(result).toHaveProperty("accountId");
  });
});
