import { Transaction } from "../entities/transactions.entity";
import { AppDataSource } from "../data-source";
import { Repository } from "typeorm";

const transactionRepository: Repository<Transaction> =
  AppDataSource.getRepository(Transaction);

export { transactionRepository };
