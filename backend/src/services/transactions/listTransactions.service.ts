import { AppDataSource } from "../../data-source";
import { Account } from "../../entities/accounts";
import { Transaction } from "../../entities/transactions";

const listTransactionsService = async (
  id: string
): Promise<Array<Transaction>> => {
  const accountRepository = AppDataSource.getRepository(Account);

  const account = await accountRepository.findOneBy({ id });

  return [...account!.creditedTransaction, ...account!.debitedTransaction];
};

export { listTransactionsService };
