import { Account } from "../entities/account.entity";
import { AppDataSource } from "../data-source";
import { Repository } from "typeorm";

const accountRepository: Repository<Account> =
  AppDataSource.getRepository(Account);

export { accountRepository };
