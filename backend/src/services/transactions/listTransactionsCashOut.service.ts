import { accountRepository } from "../../repositories/account.repository";
import { Transaction } from "../../entities/transactions";

const listTransactionsCashOutService = async (
  id: string
): Promise<Transaction[]> => {
  const account = await accountRepository.findOneBy({ id });

  return account!.debitedTransaction;
};

export { listTransactionsCashOutService };
