import { Transaction } from "../entities/transactions";
import { AppDataSource } from "../data-source";

const transactionRepository = AppDataSource.getRepository(Transaction);

export { transactionRepository };
