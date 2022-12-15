import { listTransactionsCreatedAtService } from "../../../services/transactions/listTransactionsCreatedAt.service";
import { createUserService } from "../../../services/users/createUser.service";
import { AppDataSource } from "../../../data-source";
import { DataSource } from "typeorm";
import { user } from "../../../mocks";

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

  it("Must be able to list transactions date", async () => {
    const date = new Date();

    const day = String(date.getDate() - 1).padStart(2, "0");

    const month = String(date.getMonth() + 1).padStart(2, "0");

    const year = date.getFullYear();

    const formattedDate = `${year}-${month}-${day}`;

    const newUser = await createUserService(user);

    const result = await listTransactionsCreatedAtService(
      newUser!.accountId,
      formattedDate
    );

    expect(result).toHaveProperty("map");
  });
});
