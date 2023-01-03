import { accountRepository } from "../../repositories/accountRepository";
import { Transaction } from "../../entities/transactions.entity";

const listTransactionsService = async (
  id: string
): Promise<Array<Transaction>> => {
  const account = await accountRepository.findOneBy({ id });

  return [...account!.creditedTransaction, ...account!.debitedTransaction];
};

export { listTransactionsService };
