import { AppDataSource } from "../data-source";
import { Account } from "../entities/accounts.entity";

const accountRepository = AppDataSource.getRepository(Account);

export { accountRepository };
