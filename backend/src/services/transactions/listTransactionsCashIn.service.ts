import { accountRepository } from "../../repositories/account.repository";
import { Transaction } from "../../entities/transactions";

const listTransactionsCashInService = async (
  id: string
): Promise<Transaction[]> => {
  const account = await accountRepository.findOneBy({ id });

  return account!.creditedTransaction;
};

export { listTransactionsCashInService };
