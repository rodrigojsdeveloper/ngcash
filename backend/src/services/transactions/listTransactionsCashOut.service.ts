import { accountRepository } from "../../repositories/accountRepository";
import { Transaction } from "../../entities/transactions.entity";

const listTransactionsCashOutService = async (
  id: string
): Promise<Transaction[]> => {
  const account = await accountRepository.findOneBy({ id });

  return account!.debitedTransaction;
};

export { listTransactionsCashOutService };
