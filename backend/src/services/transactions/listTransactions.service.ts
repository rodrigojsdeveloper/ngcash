import { accountRepository } from "../../repositories/account.repository";
import { Transaction } from "../../entities/transactions";

const listTransactionsService = async (
  id: string
): Promise<Array<Transaction>> => {
  const account = await accountRepository.findOneBy({ id });

  return [...account!.creditedTransaction, ...account!.debitedTransaction];
};

export { listTransactionsService };
