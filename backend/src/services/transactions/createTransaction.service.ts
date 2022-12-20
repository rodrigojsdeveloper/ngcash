import { transactionRepository } from "../../repositories/transactionRepository";
import { BadRequestError, ForbiddenError, NotFoundError } from "../../errors";
import { accountRepository } from "../../repositories/accountRepository";
import { ITransactionRequest } from "../../interfaces/transactions";
import { userRepository } from "../../repositories/userRepository";
import { Transaction } from "../../entities/transactions";

const createTransactionService = async (
  debitedId: string,
  transaction: ITransactionRequest
): Promise<Transaction> => {
  const user = await userRepository.findOneBy({
    username: transaction.username,
  });

  if (!user) {
    throw new NotFoundError("User not found");
  }

  const accountDebited = await accountRepository.findOneBy({ id: debitedId });

  const accountCredited = await accountRepository.findOneBy({
    id: user.accountId.id,
  });

  if (accountDebited?.id == accountCredited?.id) {
    throw new ForbiddenError("the user cannot make transactions for himself");
  }

  if (transaction.value > Number(accountDebited?.balance)) {
    throw new BadRequestError("insufficient debt");
  }

  accountCredited!.balance = accountCredited!.balance + transaction.value;
  accountDebited!.balance = accountDebited!.balance - transaction.value;

  await accountRepository.save(accountCredited!);
  await accountRepository.save(accountDebited!);

  const newTransaction = new Transaction();
  newTransaction.creditedAccountId = accountCredited!.id;
  newTransaction.debitedAccountId = debitedId;
  newTransaction.value = transaction.value;

  transactionRepository.create(newTransaction);
  await transactionRepository.save(newTransaction);

  return newTransaction;
};

export { createTransactionService };
