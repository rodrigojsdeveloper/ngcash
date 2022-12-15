import { viewProfileService } from "../../../services/users/viewProfile.service";
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

  it("Must be able to view a profile", async () => {
    await createUserService(user);

    const result = await viewProfileService(user.username);

    expect(result).toHaveProperty("username");
    expect(result).not.toHaveProperty("password");
    expect(result).toHaveProperty("accountId");
  });
});
