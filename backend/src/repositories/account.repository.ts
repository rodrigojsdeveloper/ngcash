import { Account } from "../entities/accounts.entity";
import { AppDataSource } from "../data-source";
import { Repository } from "typeorm";

const accountRepository: Repository<Account> =
  AppDataSource.getRepository(Account);

export { accountRepository };
