import { Transaction } from "../entities/transactions.entity";
import { AppDataSource } from "../data-source";

const transactionRepository = AppDataSource.getRepository(Transaction);

export { transactionRepository };
