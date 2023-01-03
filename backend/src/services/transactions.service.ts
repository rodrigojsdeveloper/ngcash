import { transactionRepository } from "../repositories/transactionRepository";
import { BadRequestError, ForbiddenError, NotFoundError } from "../errors";
import { accountRepository } from "../repositories/accountRepository";
import { ITransactionRequest } from "../interfaces/transactions";
import { userRepository } from "../repositories/userRepository";
import { Transaction } from "../entities/transactions.entity";

class TransactionsServices {
  async create(
    debitedId: string,
    transaction: ITransactionRequest
  ): Promise<Transaction> {
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
      throw new ForbiddenError("The user cannot make transactions for himself");
    }

    if (transaction.value > Number(accountDebited?.balance)) {
      throw new BadRequestError("Insufficient debt");
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
  }

  async list(id: string): Promise<Array<Transaction>> {
    const account = await accountRepository.findOneBy({ id });

    return [...account!.creditedTransaction, ...account!.debitedTransaction];
  }

  async listCashIn(id: string): Promise<Transaction[]> {
    const account = await accountRepository.findOneBy({ id });

    return account!.creditedTransaction;
  }

  async listCashOut(id: string): Promise<Transaction[]> {
    const account = await accountRepository.findOneBy({ id });

    return account!.debitedTransaction;
  }

  async listOfCreatedAt(id: string, date: string): Promise<Array<Transaction>> {
    const account = await accountRepository.findOneBy({ id });

    const cashIn = account!.creditedTransaction.filter((transaction) => {
      const day = String(transaction.createdAt.getDate()).padStart(2, "0");

      const month = String(transaction.createdAt.getMonth() + 1).padStart(
        2,
        "0"
      );

      const year = transaction.createdAt.getFullYear();

      const formattedDate = `${year}-${month}-${day}`;

      return formattedDate == date;
    });

    const cashOut = account!.debitedTransaction.filter((transaction) => {
      const day = String(transaction.createdAt.getDate()).padStart(2, "0");

      const month = String(transaction.createdAt.getMonth() + 1).padStart(
        2,
        "0"
      );

      const year = transaction.createdAt.getFullYear();

      const formattedDate = `${year}-${month}-${day}`;

      return formattedDate == date;
    });

    return [...cashIn, ...cashOut];
  }
}

export { TransactionsServices };
