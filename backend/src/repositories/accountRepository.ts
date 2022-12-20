import { AppDataSource } from "../data-source";
import { Account } from "../entities/accounts";

const accountRepository = AppDataSource.getRepository(Account);

export { accountRepository };
