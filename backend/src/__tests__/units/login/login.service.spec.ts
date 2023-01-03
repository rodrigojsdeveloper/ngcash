import { LoginServices } from "../../../services/login.service";
import { UsersServices } from "../../../services/users.service";
import { AppDataSource } from "../../../data-source";
import { user, login } from "../../../mocks";
import { DataSource } from "typeorm";

describe("Tests for session service", () => {
  let connection: DataSource;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (connection = res))
      .catch((err) =>
        console.error("Error during Data Source initialization", err)
      );
  });

  afterAll(async () => await connection.destroy());

  it("Must be able to create a session", async () => {
    await new UsersServices().create(user);

    const result = await new LoginServices().login(login);

    expect(result).toHaveProperty("token");
  });
});
