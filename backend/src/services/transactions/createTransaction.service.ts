import { transactionRepository } from "../../repositories/transaction.repository";
import { accountRepository } from "../../repositories/account.repository";
import { ITransactionRequest } from "../../interfaces/transactions";
import { userRepository } from "../../repositories/user.repository";
import { Transaction } from "../../entities/transactions";
import { AppError } from "../../errors";

const createTransactionService = async (
  debitedId: string,
  { value, username }: ITransactionRequest
): Promise<Transaction> => {
  const user = await userRepository.findOneBy({ username });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  const accountDebited = await accountRepository.findOneBy({ id: debitedId });

  const accountCredited = await accountRepository.findOneBy({
    id: user.accountId.id,
  });

  if (accountDebited?.id == accountCredited?.id) {
    throw new AppError("the user cannot make transactions for himself", 403);
  }

  if (value > Number(accountDebited?.balance)) {
    throw new AppError("insufficient debt");
  }

  accountCredited!.balance = accountCredited!.balance + value;
  accountDebited!.balance = accountDebited!.balance - value;

  await accountRepository.save(accountCredited!);
  await accountRepository.save(accountDebited!);

  const transaction = new Transaction();
  transaction.creditedAccountId = accountCredited!.id;
  transaction.debitedAccountId = debitedId;
  transaction.value = value;

  transactionRepository.create(transaction);
  await transactionRepository.save(transaction);

  return transaction;
};

export { createTransactionService };
