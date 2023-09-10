import { LoginService } from "../../services/login.service";
import { UserService } from "../../services/users.service";
import { AppDataSource } from "../../data-source";
import { user, login } from "../../mocks";
import { DataSource } from "typeorm";

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

  it("Must be able to login", async () => {
    await new UserService().create(user);

    const result = await new LoginService().login(login);

    expect(result).toHaveProperty("token");
  });
});
